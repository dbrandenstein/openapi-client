# coding: utf-8

"""
    Geo Engine API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.8.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from geoengine_openapi_client.models.time_interval import TimeInterval

class TestTimeInterval(unittest.TestCase):
    """TimeInterval unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> TimeInterval:
        """Test TimeInterval
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `TimeInterval`
        """
        model = TimeInterval()
        if include_optional:
            return TimeInterval(
                end = 56,
                start = 56
            )
        else:
            return TimeInterval(
                end = 56,
                start = 56,
        )
        """

    def testTimeInterval(self):
        """Test TimeInterval"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
