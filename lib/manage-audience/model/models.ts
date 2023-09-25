import localVarRequest from 'request';

export * from './addAudienceToAudienceGroupRequest';
export * from './audience';
export * from './audienceGroup';
export * from './audienceGroupAuthorityLevel';
export * from './audienceGroupCreateRoute';
export * from './audienceGroupFailedType';
export * from './audienceGroupJob';
export * from './audienceGroupJobFailedType';
export * from './audienceGroupJobStatus';
export * from './audienceGroupJobType';
export * from './audienceGroupPermission';
export * from './audienceGroupStatus';
export * from './audienceGroupType';
export * from './createAudienceGroupRequest';
export * from './createAudienceGroupResponse';
export * from './createClickBasedAudienceGroupRequest';
export * from './createClickBasedAudienceGroupResponse';
export * from './createImpBasedAudienceGroupRequest';
export * from './createImpBasedAudienceGroupResponse';
export * from './errorDetail';
export * from './errorResponse';
export * from './getAudienceDataResponse';
export * from './getAudienceGroupAuthorityLevelResponse';
export * from './getAudienceGroupsResponse';
export * from './updateAudienceGroupAuthorityLevelRequest';
export * from './updateAudienceGroupDescriptionRequest';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AddAudienceToAudienceGroupRequest } from './addAudienceToAudienceGroupRequest';
import { Audience } from './audience';
import { AudienceGroup } from './audienceGroup';
import { AudienceGroupAuthorityLevel } from './audienceGroupAuthorityLevel';
import { AudienceGroupCreateRoute } from './audienceGroupCreateRoute';
import { AudienceGroupFailedType } from './audienceGroupFailedType';
import { AudienceGroupJob } from './audienceGroupJob';
import { AudienceGroupJobFailedType } from './audienceGroupJobFailedType';
import { AudienceGroupJobStatus } from './audienceGroupJobStatus';
import { AudienceGroupJobType } from './audienceGroupJobType';
import { AudienceGroupPermission } from './audienceGroupPermission';
import { AudienceGroupStatus } from './audienceGroupStatus';
import { AudienceGroupType } from './audienceGroupType';
import { CreateAudienceGroupRequest } from './createAudienceGroupRequest';
import { CreateAudienceGroupResponse } from './createAudienceGroupResponse';
import { CreateClickBasedAudienceGroupRequest } from './createClickBasedAudienceGroupRequest';
import { CreateClickBasedAudienceGroupResponse } from './createClickBasedAudienceGroupResponse';
import { CreateImpBasedAudienceGroupRequest } from './createImpBasedAudienceGroupRequest';
import { CreateImpBasedAudienceGroupResponse } from './createImpBasedAudienceGroupResponse';
import { ErrorDetail } from './errorDetail';
import { ErrorResponse } from './errorResponse';
import { GetAudienceDataResponse } from './getAudienceDataResponse';
import { GetAudienceGroupAuthorityLevelResponse } from './getAudienceGroupAuthorityLevelResponse';
import { GetAudienceGroupsResponse } from './getAudienceGroupsResponse';
import { UpdateAudienceGroupAuthorityLevelRequest } from './updateAudienceGroupAuthorityLevelRequest';
import { UpdateAudienceGroupDescriptionRequest } from './updateAudienceGroupDescriptionRequest';

