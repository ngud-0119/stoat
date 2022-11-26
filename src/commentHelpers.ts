import * as core from '@actions/core';
import fetch from 'cross-fetch';

import { StoatConfigSchema } from './schemas/stoatConfigSchema';
import { API_URL_BASE } from './stoatApiHelpers';
import { GithubActionRun, UpdateWorkflowOutputResponse, UploadWorkflowOutputRequest } from './types';

export const uploadWorkflowOutputs = async (
  stoatConfig: StoatConfigSchema,
  commentTemplateFile: string,
  {
    ghRepository,
    ghBranch,
    ghPullRequestNumber,
    ghWorkflow,
    ghSha,
    ghCommitTimestamp,
    ghRunId,
    ghRunNumber,
    ghRunAttempt,
    ghToken
  }: GithubActionRun
): Promise<number> => {
  const params: UploadWorkflowOutputRequest = {
    ghOwner: ghRepository.owner,
    ghRepo: ghRepository.repo,
    ghBranch,
    ghPullRequestNumber,
    ghWorkflow,
    ghSha,
    ghCommitTimestamp: ghCommitTimestamp.toISOString(),
    ghRunId,
    ghRunNumber,
    ghRunAttempt,
    stoatConfig,
    commentTemplateFile,
    ghToken
  };
  const url = `${API_URL_BASE}/api/workflow_outputs`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(params)
  });

  if (!response.ok) {
    core.error(
      `Failed to upload workflow outputs (${response.status} ${response.statusText}): ${await response.text()}`
    );
    throw new Error();
  }

  const { stoatConfigFileId } = (await response.json()) as UpdateWorkflowOutputResponse;
  core.info(`Uploaded workflow outputs (stoat config ${stoatConfigFileId})!`);
  return stoatConfigFileId;
};
