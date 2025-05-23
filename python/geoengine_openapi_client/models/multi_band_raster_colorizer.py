# coding: utf-8

"""
    Geo Engine API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.8.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictFloat, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional, Union
from typing_extensions import Annotated
from typing import Optional, Set
from typing_extensions import Self

class MultiBandRasterColorizer(BaseModel):
    """
    MultiBandRasterColorizer
    """ # noqa: E501
    blue_band: Annotated[int, Field(strict=True, ge=0)] = Field(description="The band index of the blue channel.", alias="blueBand")
    blue_max: Union[StrictFloat, StrictInt] = Field(description="The maximum value for the red channel.", alias="blueMax")
    blue_min: Union[StrictFloat, StrictInt] = Field(description="The minimum value for the red channel.", alias="blueMin")
    blue_scale: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="A scaling factor for the blue channel between 0 and 1.", alias="blueScale")
    green_band: Annotated[int, Field(strict=True, ge=0)] = Field(description="The band index of the green channel.", alias="greenBand")
    green_max: Union[StrictFloat, StrictInt] = Field(description="The maximum value for the red channel.", alias="greenMax")
    green_min: Union[StrictFloat, StrictInt] = Field(description="The minimum value for the red channel.", alias="greenMin")
    green_scale: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="A scaling factor for the green channel between 0 and 1.", alias="greenScale")
    no_data_color: Optional[Annotated[List[StrictInt], Field(min_length=4, max_length=4)]] = Field(default=None, alias="noDataColor")
    red_band: Annotated[int, Field(strict=True, ge=0)] = Field(description="The band index of the red channel.", alias="redBand")
    red_max: Union[StrictFloat, StrictInt] = Field(description="The maximum value for the red channel.", alias="redMax")
    red_min: Union[StrictFloat, StrictInt] = Field(description="The minimum value for the red channel.", alias="redMin")
    red_scale: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="A scaling factor for the red channel between 0 and 1.", alias="redScale")
    type: StrictStr
    __properties: ClassVar[List[str]] = ["blueBand", "blueMax", "blueMin", "blueScale", "greenBand", "greenMax", "greenMin", "greenScale", "noDataColor", "redBand", "redMax", "redMin", "redScale", "type"]

    @field_validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['multiBand']):
            raise ValueError("must be one of enum values ('multiBand')")
        return value

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of MultiBandRasterColorizer from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of MultiBandRasterColorizer from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "blueBand": obj.get("blueBand"),
            "blueMax": obj.get("blueMax"),
            "blueMin": obj.get("blueMin"),
            "blueScale": obj.get("blueScale"),
            "greenBand": obj.get("greenBand"),
            "greenMax": obj.get("greenMax"),
            "greenMin": obj.get("greenMin"),
            "greenScale": obj.get("greenScale"),
            "noDataColor": obj.get("noDataColor"),
            "redBand": obj.get("redBand"),
            "redMax": obj.get("redMax"),
            "redMin": obj.get("redMin"),
            "redScale": obj.get("redScale"),
            "type": obj.get("type")
        })
        return _obj


