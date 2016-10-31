#!/bin/env python
# -*- coding: utf-8 -*-
# Created by Conan on 2016/10/31

from tornado.web import Application, RequestHandler
from tornado.options import define

define('port', default=8000, type=int, help='server port')
define('bind', default='0.0.0.0', type=str, help='server bind')


def make_app(router, **settings):
    app = Application(router, **settings)
    return app


class MainHandler(RequestHandler):
    def get(self):
        self.write("Hello, world")


if __name__ == '__main__':
    pass
