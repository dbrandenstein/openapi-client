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

from geoengine_openapi_client.models.raster_colorizer import RasterColorizer

class TestRasterColorizer(unittest.TestCase):
    """RasterColorizer unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> RasterColorizer:
        """Test RasterColorizer
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `RasterColorizer`
        """
        model = RasterColorizer()
        if include_optional:
            return RasterColorizer(
                band = 0,
                band_colorizer = None,
                type = 'singleBand',
                blue_band = 0,
                blue_max = 1.337,
                blue_min = 1.337,
                blue_scale = 1.337,
                green_band = 0,
                green_max = 1.337,
                green_min = 1.337,
                green_scale = 1.337,
                no_data_color = [
                    56
                    ],
                red_band = 0,
                red_max = 1.337,
                red_min = 1.337,
                red_scale = 1.337
            )
        else:
            return RasterColorizer(
                band = 0,
                band_colorizer = None,
                type = 'singleBand',
                blue_band = 0,
                blue_max = 1.337,
                blue_min = 1.337,
                green_band = 0,
                green_max = 1.337,
                green_min = 1.337,
                red_band = 0,
                red_max = 1.337,
                red_min = 1.337,
        )
        """

    def testRasterColorizer(self):
        """Test RasterColorizer"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
