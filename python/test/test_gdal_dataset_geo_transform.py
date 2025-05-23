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

from geoengine_openapi_client.models.gdal_dataset_geo_transform import GdalDatasetGeoTransform

class TestGdalDatasetGeoTransform(unittest.TestCase):
    """GdalDatasetGeoTransform unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> GdalDatasetGeoTransform:
        """Test GdalDatasetGeoTransform
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `GdalDatasetGeoTransform`
        """
        model = GdalDatasetGeoTransform()
        if include_optional:
            return GdalDatasetGeoTransform(
                origin_coordinate = geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                    x = 1.337, 
                    y = 1.337, ),
                x_pixel_size = 1.337,
                y_pixel_size = 1.337
            )
        else:
            return GdalDatasetGeoTransform(
                origin_coordinate = geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                    x = 1.337, 
                    y = 1.337, ),
                x_pixel_size = 1.337,
                y_pixel_size = 1.337,
        )
        """

    def testGdalDatasetGeoTransform(self):
        """Test GdalDatasetGeoTransform"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
