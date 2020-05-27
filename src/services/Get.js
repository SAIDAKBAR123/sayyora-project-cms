import API, { execute } from './Api'

export default {
  getAllMessages: () => execute(API().get('messages')),
  getAllServices: () => execute(API().get('services')),
  getAllCompanyList: () => execute(API().get('companies')),
  getAllRegions: () => execute(API().get('regions'))

}
