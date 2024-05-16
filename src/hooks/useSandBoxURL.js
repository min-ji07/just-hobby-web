import { CommonApi } from '../api/common/index';
import { useQuery } from '@tanstack/react-query';
import { getSandboxURLKey } from './query-keys';

// API
const getSandboxURL = key => {
    return CommonApi.getSandboxURL(key);
}

// hook
export const useSandboxURL = key => {
    return useQuery([getSandboxURLKey, key], () => getSandboxURL(key));
}