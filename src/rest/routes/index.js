import porduct from './product'

const routers = [porduct]

export default (app) => {
    routers.forEach(router => app.use('/', router))
}