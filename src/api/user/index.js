import request from '@/utils/request'

export const login = (data) => request.post('/app/v1_0/authorizations', data)
