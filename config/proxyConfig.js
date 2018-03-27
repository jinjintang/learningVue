module.exports = {
  proxyList: {
    '/users':{
        target: 'http://106.14.167.106/web/index.php',
        pathRewrite: {
          '^/users': '/users'
        }
    },
    '/student/':{
        target: 'http://127.0.0.1:8088/v1',
        pathRewrite: {
          '^/student/': '/student/'
        }
    },
    '/area/':{
        target: 'http://127.0.0.1:8088/v1',
        pathRewrite: {
          '^/area/': '/area/'
        }
    },
    '/CourseCategory/':{
        target: 'http://127.0.0.1:8088/v1',
        pathRewrite: {
          '^/CourseCategory/': '/CourseCategory/'
        }
    },
    '/CourseRank/':{
        target: 'http://127.0.0.1:8088/v1',
        pathRewrite: {
          '^/CourseRank/': '/CourseRank/'
        }
    },
    '/classs/':{
        target: 'http://127.0.0.1:8088/v1',
        pathRewrite: {
          '^/classs/': '/classs/'
        }
    },
     '/course/':{
        target: 'http://127.0.0.1:8088/v1',
        pathRewrite: {
          '^/course/': '/course/'
        }
    },
     '/orderes':{
        target: 'http://106.14.167.106/web/index.php',
        pathRewrite: {
          '^/orderes': '/orderes'
        }
    },
     '/canteens':{
        target: 'http://106.14.167.106/web/index.php',
        pathRewrite: {
          '^/canteen': '/canteen'
        }
    },
     '/dishes':{
        target: 'http://106.14.167.106/web/index.php',
        pathRewrite: {
          '^/dishes': '/dishes'
        }
    },
     '/comments':{
        target: 'http://106.14.167.106/web/index.php',
        pathRewrite: {
          '^/comments': '/comments'
        }
    },
    '/replies':{
        target: 'http://106.14.167.106/web/index.php',
        pathRewrite: {
          '^/replies': '/replies'
        }
    },
    '/counts':{
        target: 'http://106.14.167.106/web/index.php',
        pathRewrite: {
          '^/counts': '/counts'
        }
    },
    '/categroys':{
        target: 'http://106.14.167.106/web/index.php',
        pathRewrite: {
          '^/categroys': '/categroys'
        }
    }

  }
}