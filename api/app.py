#!/bin/env python
# -*- coding: utf-8 -*-
# Created by Conan on 2016/10/31

import os
from tornado.ioloop import IOLoop
from tornado.options import parse_config_file, parse_command_line, options
from api.appname import make_app, MainHandler

# from cmdb import make_app
# from cmdb.schema import SchemaHandler
# from cmdb.entity import EntityHandler
# from cmdb.entity import EntitySearchHandler

# routes = [
#     (r'/schema', SchemaHandler),
#     (r'/schema/(.*)', SchemaHandler),
#     (r'/entity/(\w+)', EntityHandler),
#     (r'/entity/(\w+)/(.*)', EntityHandler),
#     (r'/_search', EntitySearchHandler)
# ]

routes = [
    (r'/', MainHandler),
]

if __name__ == '__main__':
    # if os.path.exists('/etc/cmdb.conf'):
    #     parse_config_file('/etc/cmdb.conf')
    # if os.path.exists('./api.conf'):
    #     parse_config_file('./api.conf')
    # parse_command_line()
    app = make_app(routes, debug=True)
    app.listen(options.port, address=options.bind)
    try:
        # todo.zk.start()
        IOLoop().current().start()
    except KeyboardInterrupt:
        IOLoop().current().stop()

if __name__ == '__main__':
    pass
