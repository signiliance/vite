const DumboHost =
  'https://doujia.douyin.com/douplus/platform/modules/component/'
const DumboHostTest = 'https://dumbo-test.byted.org/apis/component/'
const DumboHostDev = 'http://localhost:5577/'
function getDumboHost(env) {
  switch (env) {
    case 'test':
      return DumboHostTest
    case 'prod':
      return DumboHost
    case 'dev':
      return DumboHostDev
    default:
      return DumboHost
  }
}
console.log(getDumboHost(1111))
