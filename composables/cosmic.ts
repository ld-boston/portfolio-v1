import type { FetchError, FetchOptions } from 'ohmyfetch'
import { NitroFetchRequest } from 'nitropack'
import {
  AsyncData,
  KeyOfRes,
  PickFrom,
} from 'nuxt/dist/app/composables/asyncData'
import { FetchResult, UseFetchOptions } from '#app'
import { Ref } from 'vue'

const COSMIC_SLUG = '0e19b0b0-5ebc-11ec-a285-a5b8b9db1838'
const COSMIC_READ_KEY = 'dO2tokTdgWaXWggZDaupTLyKE80LXkeC2LjRAJByN62PLBbPvg'

export const useCosmicApi = <
  ResT = void,
  ErrorT = FetchError,
  ReqT extends NitroFetchRequest = NitroFetchRequest,
  _ResT = ResT extends void ? FetchResult<ReqT> : ResT,
  Transform extends (res: _ResT) => any = (res: _ResT) => _ResT,
  PickKeys extends KeyOfRes<Transform> = KeyOfRes<Transform>,
>(
  request: Ref<ReqT> | ReqT | (() => ReqT),
  opts?: UseFetchOptions<_ResT, Transform, PickKeys> & { xapi?: boolean },
): AsyncData<
  PickFrom<ReturnType<Transform>, PickKeys>,
  ErrorT | null | true
> => {
  return useFetch(request, {
    baseURL: `https://api.cosmicjs.com/v2/buckets/${COSMIC_SLUG}`,
    initialCache: false,
    retry: false,
    ...opts,
    params: {
      read_key: COSMIC_READ_KEY,
      ...opts?.params,
    },
  })
}
