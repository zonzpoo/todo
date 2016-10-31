#!/bin/env python
# -*- coding: utf-8 -*-
# Created by Conan on 2016/10/31

import os
import socket
import datetime
import logging
import requests
import farmhash
from tornado.web import RequestHandler
from tornado.web import HTTPError
from tornado.options import options
from kazoo.exceptions import NodeExistsError
from .mixins import RestMixin
from .schema import SchemaHandler
from .exceptions import EntityError


def is_ip(s):
    try:
        socket.inet_aton(s)
        return True
    except OSError:
        return False


type_mapping = {
    'string': lambda x: isinstance(x, str),
    'long': lambda x: isinstance(x, int),
    'double': lambda x: isinstance(x, float),
    'date': lambda x: isinstance(x, int),
    'ip': is_ip
}

if __name__ == '__main__':
    pass