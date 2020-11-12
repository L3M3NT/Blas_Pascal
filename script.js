TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "thumbnailUrl": "media/panorama_B1B9EA08_B960_390C_41E0_80C065BDED24_t.jpg",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_B1B9EA08_B960_390C_41E0_80C065BDED24_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B1B9EA08_B960_390C_41E0_80C065BDED24.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B1B9EA08_B960_390C_41E0_80C065BDED24_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_B5C26F78_B961_F70C_41DB_8773B8B8D914",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 57,
           "width": 176,
           "url": "media/panorama_B1B9EA08_B960_390C_41E0_80C065BDED24_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 19.47,
        "yaw": 33.28,
        "pitch": -8.86
       }
      ],
      "items": [
       {
        "yaw": 33.28,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 115,
           "width": 352,
           "url": "media/panorama_B1B9EA08_B960_390C_41E0_80C065BDED24_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 19.47,
        "pitch": -8.86
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_B7524DC5_B960_1B04_41DD_680BE87D4B48",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B1B907D8_B960_F70C_41E3_AACA0FA407D2, this.camera_93DD9D39_BB60_1B0C_41CC_6319B9F38233); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 51,
           "width": 190,
           "url": "media/panorama_B1B9EA08_B960_390C_41E0_80C065BDED24_0_HS_1_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 20.03,
        "yaw": 105.7,
        "pitch": -19.9
       }
      ],
      "items": [
       {
        "yaw": 105.7,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 102,
           "width": 380,
           "url": "media/panorama_B1B9EA08_B960_390C_41E0_80C065BDED24_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 20.03,
        "pitch": -19.9
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_B618D943_B960_7B7C_41DD_9B787E25E9E3",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 28,
           "url": "media/panorama_B1B9EA08_B960_390C_41E0_80C065BDED24_0_HS_2_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 14.23,
        "yaw": 33.14,
        "pitch": -16.67
       }
      ],
      "items": [
       {
        "yaw": 33.14,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 149,
           "width": 265,
           "url": "media/panorama_B1B9EA08_B960_390C_41E0_80C065BDED24_0_HS_2_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 14.23,
        "pitch": -16.67
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_B61D2979_B961_FB0C_41E6_9B871322EEDE",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 42,
           "url": "media/panorama_B1B9EA08_B960_390C_41E0_80C065BDED24_0_HS_3_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 20.68,
        "yaw": 109.33,
        "pitch": -27.14
       }
      ],
      "items": [
       {
        "yaw": 109.33,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 156,
           "width": 415,
           "url": "media/panorama_B1B9EA08_B960_390C_41E0_80C065BDED24_0_HS_3_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 20.68,
        "pitch": -27.14
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_B696B78D_B960_1704_41D2_58DE12B89663",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922, this.camera_93DBAD2B_BB60_1B0C_41CD_0FD7B502F60F); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 74,
           "width": 193,
           "url": "media/panorama_B1B9EA08_B960_390C_41E0_80C065BDED24_0_HS_4_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 19.59,
        "yaw": -7.25,
        "pitch": -25.43
       }
      ],
      "items": [
       {
        "yaw": -7.25,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 149,
           "width": 387,
           "url": "media/panorama_B1B9EA08_B960_390C_41E0_80C065BDED24_0_HS_4_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 19.59,
        "pitch": -25.43
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_B7A81BD1_B960_3F1C_418E_69274E4A8CC0",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 47,
           "url": "media/panorama_B1B9EA08_B960_390C_41E0_80C065BDED24_0_HS_5_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 24.15,
        "yaw": -5.33,
        "pitch": -34.57
       }
      ],
      "items": [
       {
        "yaw": -5.33,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 177,
           "width": 524,
           "url": "media/panorama_B1B9EA08_B960_390C_41E0_80C065BDED24_0_HS_5_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 24.15,
        "pitch": -34.57
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_B1B9EA08_B960_390C_41E0_80C065BDED24",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "yaw": -7.25,
    "backwardYaw": 104.94,
    "panorama": {
     "thumbnailUrl": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_t.jpg",
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_A9215964_B960_1B04_41D0_3DB17585C84F",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B1B9EA08_B960_390C_41E0_80C065BDED24, this.camera_9320FFA7_BB60_1704_4182_1EB3E4488288); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 81,
              "width": 197,
              "url": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 20.52,
           "yaw": 104.94,
           "pitch": -21.62
          }
         ],
         "items": [
          {
           "yaw": 104.94,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 163,
              "width": 394,
              "url": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 20.52,
           "pitch": -21.62
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_B6B4381F_B960_7904_41DA_1E837D3A2551",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 41,
              "url": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_0_HS_1_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 21.99,
           "yaw": 106.48,
           "pitch": -31.9
          }
         ],
         "items": [
          {
           "yaw": 106.48,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 177,
              "width": 462,
              "url": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 21.99,
           "pitch": -31.9
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_A858EB4D_B960_3F04_41B1_475405EEAC80",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8, this.camera_90DCDFC7_BB60_1704_41E7_238CCAB27FB2); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 66,
              "width": 200,
              "url": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_0_HS_2_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 22.08,
           "yaw": -11.63,
           "pitch": -14.76
          }
         ],
         "items": [
          {
           "yaw": -11.63,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 136,
              "width": 408,
              "url": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_0_HS_2_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 22.08,
           "pitch": -14.76
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_A819370B_B960_170C_41AB_C72BC5FF9698",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 23,
              "url": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_0_HS_3_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 16.14,
           "yaw": -11.24,
           "pitch": -22.95
          }
         ],
         "items": [
          {
           "yaw": -11.24,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 211,
              "width": 313,
              "url": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_0_HS_3_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 16.14,
           "pitch": -22.95
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_A86BA389_B920_0F0C_41D6_0B0F0543CCF1",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898, this.camera_90C86FEC_BB60_1704_41C1_277F300E5D91); this.mainPlayList.set('selectedIndex', 11); this.mainPlayList.set('selectedIndex', 11)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 64,
              "width": 139,
              "url": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_0_HS_4_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 14.51,
           "yaw": -167.63,
           "pitch": -21.43
          }
         ],
         "items": [
          {
           "yaw": -167.63,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 129,
              "width": 278,
              "url": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_0_HS_4_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 14.51,
           "pitch": -21.43
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_A83ADDA8_B920_1B0C_41D2_5687F361BDD0",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 40,
              "url": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_0_HS_5_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 21.52,
           "yaw": -163.62,
           "pitch": -31.14
          }
         ],
         "items": [
          {
           "yaw": -163.62,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 177,
              "width": 449,
              "url": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_0_HS_5_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 21.52,
           "pitch": -31.14
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_AE0D918B_B920_0B0C_41E0_68AE3945CC8B",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B1B93A45_B960_1907_41E0_37A2840BE189, this.camera_90C47010_BB60_091C_41E4_3B2FBA784037); this.mainPlayList.set('selectedIndex', 12)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 37,
              "width": 115,
              "url": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_0_HS_6_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 12.62,
           "yaw": 165.9,
           "pitch": -13.08
          }
         ],
         "items": [
          {
           "yaw": 165.9,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 75,
              "width": 231,
              "url": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_0_HS_6_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 12.62,
           "pitch": -13.08
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_AEBC9E66_B920_1904_41D8_9F447AA9B2DE",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 16,
              "url": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_0_HS_7_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 31.37,
           "yaw": 173.52,
           "pitch": -34.57
          }
         ],
         "items": [
          {
           "yaw": 173.52,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 680,
              "width": 680,
              "url": "media/panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_0_HS_7_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 31.37,
           "pitch": -34.57
          }
         ]
        }
       ]
      }
     ],
     "id": "panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "yaw": 104.94,
       "backwardYaw": -7.25,
       "panorama": "this.panorama_B1B9EA08_B960_390C_41E0_80C065BDED24",
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "yaw": -11.63,
       "backwardYaw": 161.71,
       "panorama": {
        "thumbnailUrl": "media/panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8_t.jpg",
        "frames": [
         {
          "sphere": {
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8.jpeg"
            }
           ],
           "class": "ImageResource"
          },
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8_t.jpg",
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_A8C0243A_B920_090C_41E1_7B9C8FC86E75",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_ABADE77C_B920_1704_41D3_8646895347AE, this.camera_93E33D95_BB60_1B07_41C8_E94F2A5D2383); this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 71,
                 "width": 169,
                 "url": "media/panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8_0_HS_0_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 18.41,
              "yaw": -97.73,
              "pitch": -14.57
             }
            ],
            "items": [
             {
              "yaw": -97.73,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 142,
                 "width": 339,
                 "url": "media/panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8_0_HS_0_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 18.41,
              "pitch": -14.57
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_A8AD8D57_B921_FB04_41DE_E18C1DCB9464",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 16,
                 "width": 28,
                 "url": "media/panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8_0_HS_1_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 22.16,
              "yaw": -95.81,
              "pitch": -24.67
             }
            ],
            "items": [
             {
              "yaw": -95.81,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 245,
                 "width": 435,
                 "url": "media/panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8_0_HS_1_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 22.16,
              "pitch": -24.67
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_A8BEFB18_B920_1F0C_41D8_2DA8381DF323",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922, this.camera_93E98D8A_BB60_1B0C_41BE_BA12A28107D6); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 48,
                 "width": 142,
                 "url": "media/panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8_0_HS_2_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 15.47,
              "yaw": 161.71,
              "pitch": -14.79
             }
            ],
            "items": [
             {
              "yaw": 161.71,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 96,
                 "width": 285,
                 "url": "media/panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8_0_HS_2_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 15.47,
              "pitch": -14.79
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_AB5D7514_B920_0B04_41CC_D2592145C924",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 16,
                 "width": 52,
                 "url": "media/panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8_0_HS_3_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 28.85,
              "yaw": 162.1,
              "pitch": -22.57
             }
            ],
            "items": [
             {
              "yaw": 162.1,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 170,
                 "width": 558,
                 "url": "media/panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8_0_HS_3_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 28.85,
              "pitch": -22.57
             }
            ]
           }
          ]
         }
        ],
        "id": "panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "yaw": 161.71,
          "backwardYaw": -11.63,
          "panorama": "this.panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922",
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "yaw": -97.73,
          "backwardYaw": 93.13,
          "panorama": {
           "thumbnailUrl": "media/panorama_ABADE77C_B920_1704_41D3_8646895347AE_t.jpg",
           "frames": [
            {
             "sphere": {
              "levels": [
               {
                "class": "ImageResourceLevel",
                "height": 3217,
                "width": 6434,
                "url": "media/panorama_ABADE77C_B920_1704_41D3_8646895347AE_hq.jpeg"
               },
               {
                "class": "ImageResourceLevel",
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_ABADE77C_B920_1704_41D3_8646895347AE.jpeg"
               }
              ],
              "class": "ImageResource"
             },
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_ABADE77C_B920_1704_41D3_8646895347AE_t.jpg",
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_AB3D8FED_B920_3704_41BA_2B400C55F027",
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286, this.camera_93FC2D73_BB60_1B1C_41E4_7921078847A7); this.mainPlayList.set('selectedIndex', 5)"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 78,
                    "width": 197,
                    "url": "media/panorama_ABADE77C_B920_1704_41D3_8646895347AE_0_HS_0_0_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 19.29,
                 "yaw": -154.11,
                 "pitch": -29.05
                }
               ],
               "items": [
                {
                 "yaw": -154.11,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 156,
                    "width": 394,
                    "url": "media/panorama_ABADE77C_B920_1704_41D3_8646895347AE_0_HS_0_0.png"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 19.29,
                 "pitch": -29.05
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_AA2F1DAB_B920_3B0C_41D3_BA56B6038F04",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 16,
                    "width": 35,
                    "url": "media/panorama_ABADE77C_B920_1704_41D3_8646895347AE_0_HS_1_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 20.98,
                 "yaw": -150.86,
                 "pitch": -39.14
                }
               ],
               "items": [
                {
                 "yaw": -150.86,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 217,
                    "width": 483,
                    "url": "media/panorama_ABADE77C_B920_1704_41D3_8646895347AE_0_HS_1_0.png"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 20.98,
                 "pitch": -39.14
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_AB4F3552_B920_0B1C_41CE_0518C99EA236",
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8, this.camera_93FA8D67_BB60_1B04_41E2_68E8745097B7); this.mainPlayList.set('selectedIndex', 3)"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 47,
                    "width": 176,
                    "url": "media/panorama_ABADE77C_B920_1704_41D3_8646895347AE_0_HS_2_0_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 19.4,
                 "yaw": 93.13,
                 "pitch": -11.33
                }
               ],
               "items": [
                {
                 "yaw": 93.13,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 95,
                    "width": 353,
                    "url": "media/panorama_ABADE77C_B920_1704_41D3_8646895347AE_0_HS_2_0.png"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 19.4,
                 "pitch": -11.33
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_AABAFBBA_B920_7F0C_41D6_042D83F3DF8F",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 16,
                    "width": 36,
                    "url": "media/panorama_ABADE77C_B920_1704_41D3_8646895347AE_0_HS_3_0_map.gif"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 21.57,
                 "yaw": 94.67,
                 "pitch": -19.33
                }
               ],
               "items": [
                {
                 "yaw": 94.67,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "height": 177,
                    "width": 408,
                    "url": "media/panorama_ABADE77C_B920_1704_41D3_8646895347AE_0_HS_3_0.png"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "hfov": 21.57,
                 "pitch": -19.33
                }
               ]
              }
             ]
            }
           ],
           "id": "panorama_ABADE77C_B920_1704_41D3_8646895347AE",
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "yaw": 93.13,
             "backwardYaw": -97.73,
             "panorama": "this.panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8",
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "yaw": -154.11,
             "backwardYaw": -4.78,
             "panorama": {
              "thumbnailUrl": "media/panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286_t.jpg",
              "frames": [
               {
                "sphere": {
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "height": 3217,
                   "width": 6434,
                   "url": "media/panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286_hq.jpeg"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286.jpeg"
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286_t.jpg",
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_AA73C168_B920_0B0C_41C7_38CA5250642C",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_ABADE77C_B920_1704_41D3_8646895347AE, this.camera_923A9CE5_BB60_1907_41DE_D7B3D1687C2A); this.mainPlayList.set('selectedIndex', 4)"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 57,
                       "width": 149,
                       "url": "media/panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286_0_HS_0_0_0_map.gif"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 16.46,
                    "yaw": -4.78,
                    "pitch": -10.38
                   }
                  ],
                  "items": [
                   {
                    "yaw": -4.78,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 115,
                       "width": 299,
                       "url": "media/panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286_0_HS_0_0.png"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 16.46,
                    "pitch": -10.38
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_ABD448EB_B920_390C_419A_E7BEF78CFF37",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 16,
                       "width": 28,
                       "url": "media/panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286_0_HS_1_0_map.gif"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 19.93,
                    "yaw": -6.48,
                    "pitch": -18
                   }
                  ],
                  "items": [
                   {
                    "yaw": -6.48,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 211,
                       "width": 374,
                       "url": "media/panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286_0_HS_1_0.png"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 19.93,
                    "pitch": -18
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_AAEDAF38_B920_370C_41C4_5192A08ED3E7",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_B1B94F2F_B960_1704_41B4_353534488DA7, this.camera_9201CCDA_BB60_190C_41E7_1D136A928D60); this.mainPlayList.set('selectedIndex', 7)"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 51,
                       "width": 149,
                       "url": "media/panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286_0_HS_2_0_0_map.gif"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 15.58,
                    "yaw": 126.65,
                    "pitch": -21.43
                   }
                  ],
                  "items": [
                   {
                    "yaw": 126.65,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 102,
                       "width": 299,
                       "url": "media/panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286_0_HS_2_0.png"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 15.58,
                    "pitch": -21.43
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_AA8346F7_B920_0904_419B_6F328E8DC6AB",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 16,
                       "width": 45,
                       "url": "media/panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286_0_HS_3_0_map.gif"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 28.48,
                    "yaw": 132.38,
                    "pitch": -29.62
                   }
                  ],
                  "items": [
                   {
                    "yaw": 132.38,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 204,
                       "width": 585,
                       "url": "media/panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286_0_HS_3_0.png"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 28.48,
                    "pitch": -29.62
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_AA7C6109_B920_0B0C_41A3_39F7D86E9C17",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_B1B9021A_B960_090C_41DD_80660F4DCAC8, this.camera_920CCCCE_BB60_1904_41E5_BA4B6242E4DA); this.mainPlayList.set('selectedIndex', 6)"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 54,
                       "width": 200,
                       "url": "media/panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286_0_HS_4_0_0_map.gif"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 20.52,
                    "yaw": -118.87,
                    "pitch": -23.9
                   }
                  ],
                  "items": [
                   {
                    "yaw": -118.87,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 108,
                       "width": 401,
                       "url": "media/panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286_0_HS_4_0.png"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 20.52,
                    "pitch": -23.9
                   }
                  ]
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_AAF432F2_B920_091C_41A1_1971523734A6",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 16,
                       "width": 69,
                       "url": "media/panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286_0_HS_5_0_map.gif"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 36.69,
                    "yaw": -120,
                    "pitch": -31.52
                   }
                  ],
                  "items": [
                   {
                    "yaw": -120,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "height": 177,
                       "width": 769,
                       "url": "media/panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286_0_HS_5_0.png"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "hfov": 36.69,
                    "pitch": -31.52
                   }
                  ]
                 }
                ]
               }
              ],
              "id": "panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286",
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "yaw": -118.87,
                "backwardYaw": 156.95,
                "panorama": {
                 "thumbnailUrl": "media/panorama_B1B9021A_B960_090C_41DD_80660F4DCAC8_t.jpg",
                 "frames": [
                  {
                   "sphere": {
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 3217,
                      "width": 6434,
                      "url": "media/panorama_B1B9021A_B960_090C_41DD_80660F4DCAC8_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_B1B9021A_B960_090C_41DD_80660F4DCAC8.jpeg"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_B1B9021A_B960_090C_41DD_80660F4DCAC8_t.jpg",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_AD0DA9BF_B920_7B04_41E1_25EA641D8AC8",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286, this.camera_93F7DD7F_BB60_1B04_41E5_F90F960A518C); this.mainPlayList.set('selectedIndex', 5)"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 44,
                          "width": 132,
                          "url": "media/panorama_B1B9021A_B960_090C_41DD_80660F4DCAC8_0_HS_0_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 13.13,
                       "yaw": 156.95,
                       "pitch": -27.93
                      }
                     ],
                     "items": [
                      {
                       "yaw": 156.95,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 89,
                          "width": 265,
                          "url": "media/panorama_B1B9021A_B960_090C_41DD_80660F4DCAC8_0_HS_0_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 13.13,
                       "pitch": -27.93
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_ADB358F2_B920_191C_41E4_D26EBBF734CF",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 16,
                          "width": 72,
                          "url": "media/panorama_B1B9021A_B960_090C_41DD_80660F4DCAC8_0_HS_1_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 32.24,
                       "yaw": 155.24,
                       "pitch": -35.52
                      }
                     ],
                     "items": [
                      {
                       "yaw": 155.24,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 156,
                          "width": 708,
                          "url": "media/panorama_B1B9021A_B960_090C_41DD_80660F4DCAC8_0_HS_1_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 32.24,
                       "pitch": -35.52
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "id": "panorama_B1B9021A_B960_090C_41DD_80660F4DCAC8",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "yaw": 156.95,
                   "backwardYaw": -118.87,
                   "panorama": "this.panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286",
                   "distance": 1
                  }
                 ],
                 "hfov": 360,
                 "partial": false,
                 "pitch": 0,
                 "class": "Panorama",
                 "label": "B.Pascal_Cocina2",
                 "vfov": 180,
                 "hfovMax": 120,
                 "hfovMin": 120
                },
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "yaw": 126.65,
                "backwardYaw": -0.2,
                "panorama": {
                 "thumbnailUrl": "media/panorama_B1B94F2F_B960_1704_41B4_353534488DA7_t.jpg",
                 "frames": [
                  {
                   "sphere": {
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "height": 3217,
                      "width": 6434,
                      "url": "media/panorama_B1B94F2F_B960_1704_41B4_353534488DA7_hq.jpeg"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_B1B94F2F_B960_1704_41B4_353534488DA7.jpeg"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_B1B94F2F_B960_1704_41B4_353534488DA7_t.jpg",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_AD0060CD_B920_0904_41BE_C9166ADFC88A",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286, this.camera_93731EBF_BB60_1904_41B6_ADC8EC6655A7); this.mainPlayList.set('selectedIndex', 5)"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 64,
                          "width": 176,
                          "url": "media/panorama_B1B94F2F_B960_1704_41B4_353534488DA7_0_HS_0_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 18.69,
                       "yaw": -0.2,
                       "pitch": -19.14
                      }
                     ],
                     "items": [
                      {
                       "yaw": -0.2,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 129,
                          "width": 353,
                          "url": "media/panorama_B1B94F2F_B960_1704_41B4_353534488DA7_0_HS_0_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 18.69,
                       "pitch": -19.14
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_AD46EDF1_B920_7B1F_41BD_5ED535703356",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 16,
                          "width": 50,
                          "url": "media/panorama_B1B94F2F_B960_1704_41B4_353534488DA7_0_HS_1_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 47.09,
                       "yaw": 6.1,
                       "pitch": -31.52
                      }
                     ],
                     "items": [
                      {
                       "yaw": 6.1,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 313,
                          "width": 987,
                          "url": "media/panorama_B1B94F2F_B960_1704_41B4_353534488DA7_0_HS_1_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 47.09,
                       "pitch": -31.52
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_AD1AD410_B920_091C_41CA_1D243CEEC871",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_B1B91C13_B960_791C_41AF_74AC6E483647, this.camera_9344BE9E_BB60_1904_41DD_DD0D3726F526); this.mainPlayList.set('selectedIndex', 8)"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 47,
                          "width": 152,
                          "url": "media/panorama_B1B94F2F_B960_1704_41B4_353534488DA7_0_HS_2_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 15.99,
                       "yaw": -106.3,
                       "pitch": -20.86
                      }
                     ],
                     "items": [
                      {
                       "yaw": -106.3,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 95,
                          "width": 305,
                          "url": "media/panorama_B1B94F2F_B960_1704_41B4_353534488DA7_0_HS_2_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 15.99,
                       "pitch": -20.86
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_AD98BB43_B920_7F7C_41C3_BEBD112798D5",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 16,
                          "width": 23,
                          "url": "media/panorama_B1B94F2F_B960_1704_41B4_353534488DA7_0_HS_3_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 22.99,
                       "yaw": -102.29,
                       "pitch": -33.05
                      }
                     ],
                     "items": [
                      {
                       "yaw": -102.29,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 340,
                          "width": 490,
                          "url": "media/panorama_B1B94F2F_B960_1704_41B4_353534488DA7_0_HS_3_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 22.99,
                       "pitch": -33.05
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_AD5C11A6_B920_0B04_41E1_425F022A321C",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898, this.camera_93483E7D_BB60_1904_41D0_CAE4CF12C462); this.mainPlayList.set('selectedIndex', 11)"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 81,
                          "width": 190,
                          "url": "media/panorama_B1B94F2F_B960_1704_41B4_353534488DA7_0_HS_4_0_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 15,
                       "yaw": -130.49,
                       "pitch": -45.24
                      }
                     ],
                     "items": [
                      {
                       "yaw": -130.49,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 163,
                          "width": 380,
                          "url": "media/panorama_B1B94F2F_B960_1704_41B4_353534488DA7_0_HS_4_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 15,
                       "pitch": -45.24
                      }
                     ]
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_ADEB7799_B920_F70C_41D9_994915805780",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 16,
                          "width": 29,
                          "url": "media/panorama_B1B94F2F_B960_1704_41B4_353534488DA7_0_HS_5_0_map.gif"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 16.52,
                       "yaw": -120.95,
                       "pitch": -60.48
                      }
                     ],
                     "items": [
                      {
                       "yaw": -120.95,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "height": 326,
                          "width": 599,
                          "url": "media/panorama_B1B94F2F_B960_1704_41B4_353534488DA7_0_HS_5_0.png"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "hfov": 16.52,
                       "pitch": -60.48
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "id": "panorama_B1B94F2F_B960_1704_41B4_353534488DA7",
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "yaw": -130.49,
                   "backwardYaw": -164.2,
                   "panorama": {
                    "thumbnailUrl": "media/panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898_t.jpg",
                    "frames": [
                     {
                      "sphere": {
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 3217,
                         "width": 6434,
                         "url": "media/panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898.jpeg"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898_t.jpg",
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_AC1AE2E7_B920_0904_41D3_2F93B5A190FE",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_B1B94F2F_B960_1704_41B4_353534488DA7, this.camera_9212DCAD_BB60_1904_41C7_D9780C8B8226); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 59,
                             "width": 200,
                             "url": "media/panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898_0_HS_0_0_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 21.91,
                          "yaw": -164.2,
                          "pitch": -30.76
                         }
                        ],
                        "items": [
                         {
                          "yaw": -164.2,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 136,
                             "width": 455,
                             "url": "media/panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898_0_HS_0_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 21.91,
                          "pitch": -30.76
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_ACF9B11F_B920_0B03_41DA_46D775FA78DD",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 16,
                             "width": 31,
                             "url": "media/panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898_0_HS_1_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 20.76,
                          "yaw": -159.43,
                          "pitch": -42.57
                         }
                        ],
                        "items": [
                         {
                          "yaw": -159.43,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 258,
                             "width": 503,
                             "url": "media/panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898_0_HS_1_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 20.76,
                          "pitch": -42.57
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_ACC6E134_B920_0B04_41C5_6E2BF7AD28C4",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_B1B93A45_B960_1907_41E0_37A2840BE189, this.camera_921E9C9D_BB60_1907_41DB_6D816A109EC4); this.mainPlayList.set('selectedIndex', 12)"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 54,
                             "width": 197,
                             "url": "media/panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898_0_HS_2_0_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 20.29,
                          "yaw": 1.32,
                          "pitch": -23.14
                         }
                        ],
                        "items": [
                         {
                          "yaw": 1.32,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 108,
                             "width": 394,
                             "url": "media/panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898_0_HS_2_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 20.29,
                          "pitch": -23.14
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_AF793547_B920_0B04_41D4_193A03B908E4",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 16,
                             "width": 36,
                             "url": "media/panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898_0_HS_3_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 20.46,
                          "yaw": 2.67,
                          "pitch": -31.52
                         }
                        ],
                        "items": [
                         {
                          "yaw": 2.67,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 190,
                             "width": 428,
                             "url": "media/panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898_0_HS_3_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 20.46,
                          "pitch": -31.52
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_ACE2D8FF_B920_1904_41CD_FD1D0FDAF0D0",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922, this.camera_921A2C90_BB60_191C_41D0_4673EC15E090); this.mainPlayList.set('selectedIndex', 1)"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 47,
                             "width": 163,
                             "url": "media/panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898_0_HS_4_0_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 17.62,
                          "yaw": -65.35,
                          "pitch": -15.14
                         }
                        ],
                        "items": [
                         {
                          "yaw": -65.35,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 95,
                             "width": 326,
                             "url": "media/panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898_0_HS_4_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 17.62,
                          "pitch": -15.14
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_AC8FDC02_B920_18FC_41DE_CCE83A1EE41A",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 16,
                             "width": 47,
                             "url": "media/panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898_0_HS_5_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 28.06,
                          "yaw": -63.05,
                          "pitch": -22.95
                         }
                        ],
                        "items": [
                         {
                          "yaw": -63.05,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 183,
                             "width": 544,
                             "url": "media/panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898_0_HS_5_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 28.06,
                          "pitch": -22.95
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "id": "panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "yaw": -65.35,
                      "backwardYaw": -167.63,
                      "panorama": "this.panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922",
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "yaw": 1.32,
                      "backwardYaw": 117.51,
                      "panorama": {
                       "thumbnailUrl": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189_t.jpg",
                       "frames": [
                        {
                         "sphere": {
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "height": 3217,
                            "width": 6434,
                            "url": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189_hq.jpeg"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "height": 1608,
                            "width": 3217,
                            "url": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189.jpeg"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189_t.jpg",
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_AF827A6C_B920_1904_41E5_139E47773CCA",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898, this.camera_93B54E15_BB60_1904_41D8_F3DC2B8FB55C); this.mainPlayList.set('selectedIndex', 11)"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 60,
                                "width": 200,
                                "url": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189_0_HS_0_0_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 22.16,
                             "yaw": 117.51,
                             "pitch": -28.1
                            }
                           ],
                           "items": [
                            {
                             "yaw": 117.51,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 136,
                                "width": 448,
                                "url": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189_0_HS_0_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 22.16,
                             "pitch": -28.1
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_AF0DBB06_B920_3F05_41CB_5320AFBE22BC",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 16,
                                "width": 23,
                                "url": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189_0_HS_1_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 18.05,
                             "yaw": 119.62,
                             "pitch": -41.24
                            }
                           ],
                           "items": [
                            {
                             "yaw": 119.62,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 292,
                                "width": 428,
                                "url": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189_0_HS_1_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 18.05,
                             "pitch": -41.24
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_A12A6057_B920_0904_41D1_FFB1A31727F8",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922, this.camera_93BEDDF3_BB60_1B1C_4188_190284B40A56); this.mainPlayList.set('selectedIndex', 1)"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 47,
                                "width": 139,
                                "url": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189_0_HS_2_0_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 15.23,
                             "yaw": 165.71,
                             "pitch": -12.83
                            }
                           ],
                           "items": [
                            {
                             "yaw": 165.71,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 94,
                                "width": 279,
                                "url": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189_0_HS_2_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 15.23,
                             "pitch": -12.83
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_A1D6919A_B920_0B0C_41CA_9F5DC7366474",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 16,
                                "width": 16,
                                "url": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189_0_HS_3_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 30.48,
                             "yaw": 167.81,
                             "pitch": -36.86
                            }
                           ],
                           "items": [
                            {
                             "yaw": 167.81,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 680,
                                "width": 680,
                                "url": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189_0_HS_3_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 30.48,
                             "pitch": -36.86
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_A5B2DD1E_B9E0_1B04_41E6_345D1533F2AC",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B378E817_B960_1904_4173_D530B6BE57DD, this.camera_935DCE5C_BB60_1904_41D6_5E201203B6C4); this.mainPlayList.set('selectedIndex', 13)"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 79,
                                "width": 200,
                                "url": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189_0_HS_4_0_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 18.64,
                             "yaw": 22.84,
                             "pitch": -38.95
                            }
                           ],
                           "items": [
                            {
                             "yaw": 22.84,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 170,
                                "width": 428,
                                "url": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189_0_HS_4_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 18.64,
                             "pitch": -38.95
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_A372ABD2_B9E0_1F1C_41E5_BBDB26627A3E",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 16,
                                "width": 84,
                                "url": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189_0_HS_5_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 30.98,
                             "yaw": 29.9,
                             "pitch": -49.81
                            }
                           ],
                           "items": [
                            {
                             "yaw": 29.9,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 163,
                                "width": 857,
                                "url": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189_0_HS_5_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 30.98,
                             "pitch": -49.81
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_A2F620E3_B9E0_0903_41D4_CD9DA52B3AC9",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B1BC579B_B960_170C_41D0_4539C9DCAD7D, this.camera_93A1FE36_BB60_1901_41E7_5B2876D6CE90); this.mainPlayList.set('selectedIndex', 14)"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 37,
                                "width": 118,
                                "url": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189_0_HS_6_0_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 13.2,
                             "yaw": -4.2,
                             "pitch": -7.33
                            }
                           ],
                           "items": [
                            {
                             "yaw": -4.2,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 74,
                                "width": 237,
                                "url": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189_0_HS_6_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 13.2,
                             "pitch": -7.33
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_A5BF685D_B9E0_3904_41C6_17C2216945F8",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 16,
                                "width": 43,
                                "url": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189_0_HS_7_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 32.68,
                             "yaw": -1.33,
                             "pitch": -17.62
                            }
                           ],
                           "items": [
                            {
                             "yaw": -1.33,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 224,
                                "width": 612,
                                "url": "media/panorama_B1B93A45_B960_1907_41E0_37A2840BE189_0_HS_7_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 32.68,
                             "pitch": -17.62
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "id": "panorama_B1B93A45_B960_1907_41E0_37A2840BE189",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "yaw": 165.71,
                         "backwardYaw": 165.9,
                         "panorama": "this.panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922",
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "yaw": 117.51,
                         "backwardYaw": 1.32,
                         "panorama": "this.panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898",
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "yaw": -4.2,
                         "backwardYaw": 170.29,
                         "panorama": {
                          "thumbnailUrl": "media/panorama_B1BC579B_B960_170C_41D0_4539C9DCAD7D_t.jpg",
                          "frames": [
                           {
                            "sphere": {
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "height": 3217,
                               "width": 6434,
                               "url": "media/panorama_B1BC579B_B960_170C_41D0_4539C9DCAD7D_hq.jpeg"
                              },
                              {
                               "class": "ImageResourceLevel",
                               "height": 1608,
                               "width": 3217,
                               "url": "media/panorama_B1BC579B_B960_170C_41D0_4539C9DCAD7D.jpeg"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_B1BC579B_B960_170C_41D0_4539C9DCAD7D_t.jpg",
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_A5ACCDEE_B9E0_FB04_41E3_135708017569",
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_B1B93A45_B960_1907_41E0_37A2840BE189, this.camera_936FBEE0_BB60_193C_41D3_3C37CF89442C); this.mainPlayList.set('selectedIndex', 12)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 176,
                                   "width": 146,
                                   "url": "media/panorama_B1BC579B_B960_170C_41D0_4539C9DCAD7D_0_HS_0_0_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 15.11,
                                "yaw": 170.29,
                                "pitch": -22.71
                               }
                              ],
                              "items": [
                               {
                                "yaw": 170.29,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 352,
                                   "width": 292,
                                   "url": "media/panorama_B1BC579B_B960_170C_41D0_4539C9DCAD7D_0_HS_0_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 15.11,
                                "pitch": -22.71
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_A5034F30_B9E0_371C_41E5_11DAF6A10E33",
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 16,
                                   "width": 36,
                                   "url": "media/panorama_B1BC579B_B960_170C_41D0_4539C9DCAD7D_0_HS_1_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 19.85,
                                "yaw": 168.38,
                                "pitch": -31.33
                               }
                              ],
                              "items": [
                               {
                                "yaw": 168.38,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 183,
                                   "width": 415,
                                   "url": "media/panorama_B1BC579B_B960_170C_41D0_4539C9DCAD7D_0_HS_1_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 19.85,
                                "pitch": -31.33
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_A5E32792_B9E0_171D_41CD_3A69A0710DAB",
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.mainPlayList.set('selectedIndex', 15)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 78,
                                   "width": 166,
                                   "url": "media/panorama_B1BC579B_B960_170C_41D0_4539C9DCAD7D_0_HS_2_0_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 17.77,
                                "yaw": 1.89,
                                "pitch": -17.62
                               }
                              ],
                              "items": [
                               {
                                "yaw": 1.89,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 156,
                                   "width": 333,
                                   "url": "media/panorama_B1BC579B_B960_170C_41D0_4539C9DCAD7D_0_HS_2_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 17.77,
                                "pitch": -17.62
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_A574E28C_B9E0_0904_41D9_A7DDA495A725",
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 16,
                                   "width": 34,
                                   "url": "media/panorama_B1BC579B_B960_170C_41D0_4539C9DCAD7D_0_HS_3_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 27.77,
                                "yaw": 2.48,
                                "pitch": -29.81
                               }
                              ],
                              "items": [
                               {
                                "yaw": 2.48,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 265,
                                   "width": 571,
                                   "url": "media/panorama_B1BC579B_B960_170C_41D0_4539C9DCAD7D_0_HS_3_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 27.77,
                                "pitch": -29.81
                               }
                              ]
                             }
                            ]
                           }
                          ],
                          "id": "panorama_B1BC579B_B960_170C_41D0_4539C9DCAD7D",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "yaw": 170.29,
                            "backwardYaw": -4.2,
                            "panorama": "this.panorama_B1B93A45_B960_1907_41E0_37A2840BE189",
                            "distance": 1
                           }
                          ],
                          "hfov": 360,
                          "partial": false,
                          "pitch": 0,
                          "class": "Panorama",
                          "label": "B.Pascal_ClosetB",
                          "vfov": 180,
                          "hfovMax": 120,
                          "hfovMin": 120
                         },
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "yaw": 22.84,
                         "backwardYaw": -103.06,
                         "panorama": {
                          "thumbnailUrl": "media/panorama_B378E817_B960_1904_4173_D530B6BE57DD_t.jpg",
                          "frames": [
                           {
                            "sphere": {
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "height": 3217,
                               "width": 6434,
                               "url": "media/panorama_B378E817_B960_1904_4173_D530B6BE57DD_hq.jpeg"
                              },
                              {
                               "class": "ImageResourceLevel",
                               "height": 1608,
                               "width": 3217,
                               "url": "media/panorama_B378E817_B960_1904_4173_D530B6BE57DD.jpeg"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_B378E817_B960_1904_4173_D530B6BE57DD_t.jpg",
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_A2D478DC_B9E0_1904_41E1_BBF8D898F9E9",
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_B1B93A45_B960_1907_41E0_37A2840BE189, this.camera_92303CFC_BB60_1904_41AE_B3FC77F5353C); this.mainPlayList.set('selectedIndex', 12)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 81,
                                   "width": 197,
                                   "url": "media/panorama_B378E817_B960_1904_4173_D530B6BE57DD_0_HS_0_0_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 17.83,
                                "yaw": -103.06,
                                "pitch": -36.1
                               }
                              ],
                              "items": [
                               {
                                "yaw": -103.06,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 163,
                                   "width": 394,
                                   "url": "media/panorama_B378E817_B960_1904_4173_D530B6BE57DD_0_HS_0_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 17.83,
                                "pitch": -36.1
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_A3425440_B9E0_097D_41AD_BBDB8487B122",
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 16,
                                   "width": 35,
                                   "url": "media/panorama_B378E817_B960_1904_4173_D530B6BE57DD_0_HS_1_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 18.18,
                                "yaw": -97.71,
                                "pitch": -48.48
                               }
                              ],
                              "items": [
                               {
                                "yaw": -97.71,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 224,
                                   "width": 490,
                                   "url": "media/panorama_B378E817_B960_1904_4173_D530B6BE57DD_0_HS_1_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 18.18,
                                "pitch": -48.48
                               }
                              ]
                             }
                            ]
                           }
                          ],
                          "id": "panorama_B378E817_B960_1904_4173_D530B6BE57DD",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "yaw": -103.06,
                            "backwardYaw": 22.84,
                            "panorama": "this.panorama_B1B93A45_B960_1907_41E0_37A2840BE189",
                            "distance": 1
                           }
                          ],
                          "hfov": 360,
                          "partial": false,
                          "pitch": 0,
                          "class": "Panorama",
                          "label": "B.Pascal_BVisitas",
                          "vfov": 180,
                          "hfovMax": 120,
                          "hfovMin": 120
                         },
                         "distance": 1
                        }
                       ],
                       "hfov": 360,
                       "partial": false,
                       "pitch": 0,
                       "class": "Panorama",
                       "label": "B.Pascal_Pasillo",
                       "vfov": 180,
                       "hfovMax": 120,
                       "hfovMin": 120
                      },
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "yaw": -164.2,
                      "backwardYaw": -130.49,
                      "panorama": "this.panorama_B1B94F2F_B960_1704_41B4_353534488DA7",
                      "distance": 1
                     }
                    ],
                    "hfov": 360,
                    "partial": false,
                    "pitch": 0,
                    "class": "Panorama",
                    "label": "B.Pascal_EntradaCocina",
                    "vfov": 180,
                    "hfovMax": 120,
                    "hfovMin": 120
                   },
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "yaw": -106.3,
                   "backwardYaw": -16.2,
                   "panorama": {
                    "thumbnailUrl": "media/panorama_B1B91C13_B960_791C_41AF_74AC6E483647_t.jpg",
                    "frames": [
                     {
                      "sphere": {
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "height": 3217,
                         "width": 6434,
                         "url": "media/panorama_B1B91C13_B960_791C_41AF_74AC6E483647_hq.jpeg"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_B1B91C13_B960_791C_41AF_74AC6E483647.jpeg"
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_B1B91C13_B960_791C_41AF_74AC6E483647_t.jpg",
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_AEC473F7_B920_0F04_41E2_2804F3BA3E8D",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_B1B94F2F_B960_1704_41B4_353534488DA7, this.camera_9216BCB8_BB60_190C_41DC_FBE9DE6AB09F); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 51,
                             "width": 156,
                             "url": "media/panorama_B1B91C13_B960_791C_41AF_74AC6E483647_0_HS_0_0_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 16.53,
                          "yaw": -16.2,
                          "pitch": -19.14
                         }
                        ],
                        "items": [
                         {
                          "yaw": -16.2,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 102,
                             "width": 312,
                             "url": "media/panorama_B1B91C13_B960_791C_41AF_74AC6E483647_0_HS_0_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 16.53,
                          "pitch": -19.14
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_AE845908_B920_1B0C_41E5_002668F5D196",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 16,
                             "width": 33,
                             "url": "media/panorama_B1B91C13_B960_791C_41AF_74AC6E483647_0_HS_1_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 19.83,
                          "yaw": -14.86,
                          "pitch": -28.1
                         }
                        ],
                        "items": [
                         {
                          "yaw": -14.86,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 190,
                             "width": 401,
                             "url": "media/panorama_B1B91C13_B960_791C_41AF_74AC6E483647_0_HS_1_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 19.83,
                          "pitch": -28.1
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_A1B079C0_B9E0_7B7C_417F_3A6CD6131870",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2, this.camera_920BECC3_BB60_197C_41E5_105FC9541DDD); this.mainPlayList.set('selectedIndex', 9)"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 64,
                             "width": 180,
                             "url": "media/panorama_B1B91C13_B960_791C_41AF_74AC6E483647_0_HS_2_0_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 18.12,
                          "yaw": -164.2,
                          "pitch": -26
                         }
                        ],
                        "items": [
                         {
                          "yaw": -164.2,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 129,
                             "width": 360,
                             "url": "media/panorama_B1B91C13_B960_791C_41AF_74AC6E483647_0_HS_2_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 18.12,
                          "pitch": -26
                         }
                        ]
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_A13587F9_B9E0_370F_41D7_0B91A005E1AB",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 16,
                             "width": 29,
                             "url": "media/panorama_B1B91C13_B960_791C_41AF_74AC6E483647_0_HS_3_0_map.gif"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 24.95,
                          "yaw": -157.9,
                          "pitch": -38.76
                         }
                        ],
                        "items": [
                         {
                          "yaw": -157.9,
                          "class": "HotspotPanoramaOverlayImage",
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "height": 313,
                             "width": 571,
                             "url": "media/panorama_B1B91C13_B960_791C_41AF_74AC6E483647_0_HS_3_0.png"
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "hfov": 24.95,
                          "pitch": -38.76
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "id": "panorama_B1B91C13_B960_791C_41AF_74AC6E483647",
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "yaw": -16.2,
                      "backwardYaw": -106.3,
                      "panorama": "this.panorama_B1B94F2F_B960_1704_41B4_353534488DA7",
                      "distance": 1
                     },
                     {
                      "class": "AdjacentPanorama",
                      "yaw": -164.2,
                      "backwardYaw": 59.03,
                      "panorama": {
                       "thumbnailUrl": "media/panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2_t.jpg",
                       "frames": [
                        {
                         "sphere": {
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "height": 3217,
                            "width": 6434,
                            "url": "media/panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2_hq.jpeg"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "height": 1608,
                            "width": 3217,
                            "url": "media/panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2.jpeg"
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2_t.jpg",
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_A001243C_B9E0_0904_41DC_41D3F398CC38",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B1B91C13_B960_791C_41AF_74AC6E483647, this.camera_931BFF01_BB60_18FC_4172_FA3AD06421FE); this.mainPlayList.set('selectedIndex', 8)"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 68,
                                "width": 193,
                                "url": "media/panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2_0_HS_0_0_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 18.78,
                             "yaw": 59.03,
                             "pitch": -30
                            }
                           ],
                           "items": [
                            {
                             "yaw": 59.03,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 136,
                                "width": 387,
                                "url": "media/panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2_0_HS_0_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 18.78,
                             "pitch": -30
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_A0AFDE1D_B9E1_F904_41E0_58CE885A0B6A",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 16,
                                "width": 24,
                                "url": "media/panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2_0_HS_1_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 19.38,
                             "yaw": 58.48,
                             "pitch": -45.05
                            }
                           ],
                           "items": [
                            {
                             "yaw": 58.48,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 319,
                                "width": 490,
                                "url": "media/panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2_0_HS_1_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 19.38,
                             "pitch": -45.05
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_A0A702D7_B9E0_0904_4144_2BB6C02459FE",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_B1B91836_B960_3904_41D2_D5170F93C476, this.camera_93162F22_BB60_173C_41D7_1DF0CCFA6001); this.mainPlayList.set('selectedIndex', 10)"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 68,
                                "width": 176,
                                "url": "media/panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2_0_HS_2_0_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 16.51,
                             "yaw": 119.03,
                             "pitch": -33.43
                            }
                           ],
                           "items": [
                            {
                             "yaw": 119.03,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 136,
                                "width": 353,
                                "url": "media/panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2_0_HS_2_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 16.51,
                             "pitch": -33.43
                            }
                           ]
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_A05D680B_B9E0_190C_41DE_203F5344BECB",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 16,
                                "width": 25,
                                "url": "media/panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2_0_HS_3_0_map.gif"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 15.21,
                             "yaw": 122.48,
                             "pitch": -48.29
                            }
                           ],
                           "items": [
                            {
                             "yaw": 122.48,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "height": 258,
                                "width": 408,
                                "url": "media/panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2_0_HS_3_0.png"
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "hfov": 15.21,
                             "pitch": -48.29
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "id": "panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2",
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "yaw": 59.03,
                         "backwardYaw": -164.2,
                         "panorama": "this.panorama_B1B91C13_B960_791C_41AF_74AC6E483647",
                         "distance": 1
                        },
                        {
                         "class": "AdjacentPanorama",
                         "yaw": 119.03,
                         "backwardYaw": -107.25,
                         "panorama": {
                          "thumbnailUrl": "media/panorama_B1B91836_B960_3904_41D2_D5170F93C476_t.jpg",
                          "frames": [
                           {
                            "sphere": {
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "height": 3217,
                               "width": 6434,
                               "url": "media/panorama_B1B91836_B960_3904_41D2_D5170F93C476_hq.jpeg"
                              },
                              {
                               "class": "ImageResourceLevel",
                               "height": 1608,
                               "width": 3217,
                               "url": "media/panorama_B1B91836_B960_3904_41D2_D5170F93C476.jpeg"
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_B1B91836_B960_3904_41D2_D5170F93C476_t.jpg",
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_A3941D46_B9E1_FB05_41A3_5C3860BAFE6B",
                              "useHandCursor": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2, this.camera_93996DA1_BB60_1B3C_41E5_183ACE11D8DB); this.mainPlayList.set('selectedIndex', 9)"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 93,
                                   "width": 200,
                                   "url": "media/panorama_B1B91836_B960_3904_41D2_D5170F93C476_0_HS_0_0_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 14.92,
                                "yaw": -107.25,
                                "pitch": -50.76
                               }
                              ],
                              "items": [
                               {
                                "yaw": -107.25,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 197,
                                   "width": 421,
                                   "url": "media/panorama_B1B91836_B960_3904_41D2_D5170F93C476_0_HS_0_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 14.92,
                                "pitch": -50.76
                               }
                              ]
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_A2ABAEBB_B9E0_390C_416F_CF6DC053A754",
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "maps": [
                               {
                                "class": "HotspotPanoramaOverlayMap",
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 16,
                                   "width": 31,
                                   "url": "media/panorama_B1B91836_B960_3904_41D2_D5170F93C476_0_HS_1_0_map.gif"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 14.72,
                                "yaw": -106.29,
                                "pitch": -66
                               }
                              ],
                              "items": [
                               {
                                "yaw": -106.29,
                                "class": "HotspotPanoramaOverlayImage",
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "height": 333,
                                   "width": 646,
                                   "url": "media/panorama_B1B91836_B960_3904_41D2_D5170F93C476_0_HS_1_0.png"
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "hfov": 14.72,
                                "pitch": -66
                               }
                              ]
                             }
                            ]
                           }
                          ],
                          "id": "panorama_B1B91836_B960_3904_41D2_D5170F93C476",
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "yaw": -107.25,
                            "backwardYaw": 119.03,
                            "panorama": "this.panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2",
                            "distance": 1
                           }
                          ],
                          "hfov": 360,
                          "partial": false,
                          "pitch": 0,
                          "class": "Panorama",
                          "label": "B.Pascal_CServicioBa\u00f1",
                          "vfov": 180,
                          "hfovMax": 120,
                          "hfovMin": 120
                         },
                         "distance": 1
                        }
                       ],
                       "hfov": 360,
                       "partial": false,
                       "pitch": 0,
                       "class": "Panorama",
                       "label": "B.Pascal_CServicio1",
                       "vfov": 180,
                       "hfovMax": 120,
                       "hfovMin": 120
                      },
                      "distance": 1
                     }
                    ],
                    "hfov": 360,
                    "partial": false,
                    "pitch": 0,
                    "class": "Panorama",
                    "label": "B.Pascal_Lavado1",
                    "vfov": 180,
                    "hfovMax": 120,
                    "hfovMin": 120
                   },
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "yaw": -0.2,
                   "backwardYaw": 126.65,
                   "panorama": "this.panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286",
                   "distance": 1
                  }
                 ],
                 "hfov": 360,
                 "partial": false,
                 "pitch": 0,
                 "class": "Panorama",
                 "label": "B.Pascal_Cocina3",
                 "vfov": 180,
                 "hfovMax": 120,
                 "hfovMin": 120
                },
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "yaw": -4.78,
                "backwardYaw": -154.11,
                "panorama": "this.panorama_ABADE77C_B920_1704_41D3_8646895347AE",
                "distance": 1
               }
              ],
              "hfov": 360,
              "partial": false,
              "pitch": 0,
              "class": "Panorama",
              "label": "B.Pascal_Cocina1",
              "vfov": 180,
              "hfovMax": 120,
              "hfovMin": 120
             },
             "distance": 1
            }
           ],
           "hfov": 360,
           "partial": false,
           "pitch": 0,
           "class": "Panorama",
           "label": "B.Pascal_Sala2",
           "vfov": 180,
           "hfovMax": 120,
           "hfovMin": 120
          },
          "distance": 1
         }
        ],
        "hfov": 360,
        "partial": false,
        "pitch": 0,
        "class": "Panorama",
        "label": "B.Pascal_Sala1",
        "vfov": 180,
        "hfovMax": 120,
        "hfovMin": 120
       },
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "yaw": -167.63,
       "backwardYaw": -65.35,
       "panorama": "this.panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898",
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "yaw": 165.9,
       "backwardYaw": 165.71,
       "panorama": "this.panorama_B1B93A45_B960_1907_41E0_37A2840BE189",
       "distance": 1
      }
     ],
     "hfov": 360,
     "partial": false,
     "pitch": 0,
     "class": "Panorama",
     "label": "B.Pascal_Entr2",
     "vfov": 180,
     "hfovMax": 120,
     "hfovMin": 120
    },
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "yaw": 105.7,
    "backwardYaw": -163.06,
    "panorama": {
     "thumbnailUrl": "media/panorama_B1B907D8_B960_F70C_41E3_AACA0FA407D2_t.jpg",
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_B1B907D8_B960_F70C_41E3_AACA0FA407D2_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_B1B907D8_B960_F70C_41E3_AACA0FA407D2.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_B1B907D8_B960_F70C_41E3_AACA0FA407D2_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_A0D16A48_B9E0_390C_4182_EC92E0614752",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B1B9EA08_B960_390C_41E0_80C065BDED24, this.camera_93371F85_BB60_1704_41D3_9F2A1D80C21E); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 61,
              "width": 159,
              "url": "media/panorama_B1B907D8_B960_F70C_41E3_AACA0FA407D2_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 16.25,
           "yaw": -163.06,
           "pitch": -24.67
          }
         ],
         "items": [
          {
           "yaw": -163.06,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 122,
              "width": 319,
              "url": "media/panorama_B1B907D8_B960_F70C_41E3_AACA0FA407D2_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 16.25,
           "pitch": -24.67
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_A05FAC52_B9E0_191D_41B6_13333442F3C5",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 22,
              "url": "media/panorama_B1B907D8_B960_F70C_41E3_AACA0FA407D2_0_HS_1_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 20.32,
           "yaw": -160.76,
           "pitch": -37.24
          }
         ],
         "items": [
          {
           "yaw": -160.76,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 326,
              "width": 456,
              "url": "media/panorama_B1B907D8_B960_F70C_41E3_AACA0FA407D2_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 20.32,
           "pitch": -37.24
          }
         ]
        }
       ]
      }
     ],
     "id": "panorama_B1B907D8_B960_F70C_41E3_AACA0FA407D2",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "yaw": -163.06,
       "backwardYaw": 105.7,
       "panorama": "this.panorama_B1B9EA08_B960_390C_41E0_80C065BDED24",
       "distance": 1
      }
     ],
     "hfov": 360,
     "partial": false,
     "pitch": 0,
     "class": "Panorama",
     "label": "B.Pascal_Estudio",
     "vfov": 180,
     "hfovMax": 120,
     "hfovMin": 120
    },
    "distance": 1
   }
  ],
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "label": "Entrada",
  "vfov": 180,
  "hfovMax": 120,
  "hfovMin": 120
 },
 {
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true
 },
 {
  "id": "panorama_B1B9EA08_B960_390C_41E0_80C065BDED24_camera",
  "automaticRotationSpeed": 17,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.61,
   "pitch": -2.54
  },
  "manualRotationSpeed": 1391,
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922",
 {
  "id": "panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B1B907D8_B960_F70C_41E3_AACA0FA407D2",
 {
  "id": "panorama_B1B907D8_B960_F70C_41E3_AACA0FA407D2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8",
 {
  "id": "panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_ABADE77C_B920_1704_41D3_8646895347AE",
 {
  "id": "panorama_ABADE77C_B920_1704_41D3_8646895347AE_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286",
 {
  "id": "panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B1B9021A_B960_090C_41DD_80660F4DCAC8",
 {
  "id": "panorama_B1B9021A_B960_090C_41DD_80660F4DCAC8_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B1B94F2F_B960_1704_41B4_353534488DA7",
 {
  "id": "panorama_B1B94F2F_B960_1704_41B4_353534488DA7_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B1B91C13_B960_791C_41AF_74AC6E483647",
 {
  "id": "panorama_B1B91C13_B960_791C_41AF_74AC6E483647_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2",
 {
  "id": "panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B1B91836_B960_3904_41D2_D5170F93C476",
 {
  "id": "panorama_B1B91836_B960_3904_41D2_D5170F93C476_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898",
 {
  "id": "panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B1B93A45_B960_1907_41E0_37A2840BE189",
 {
  "id": "panorama_B1B93A45_B960_1907_41E0_37A2840BE189_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B378E817_B960_1904_4173_D530B6BE57DD",
 {
  "id": "panorama_B378E817_B960_1904_4173_D530B6BE57DD_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B1BC579B_B960_170C_41D0_4539C9DCAD7D",
 {
  "id": "panorama_B1BC579B_B960_170C_41D0_4539C9DCAD7D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "thumbnailUrl": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_t.jpg",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_A49EFDA7_B9E0_3B04_41C0_18E5A1FFE5BF",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B1BA742E_B960_0905_41C6_DF0A7B40FCB1, this.camera_922A2D08_BB60_1B0C_419B_69DDD18EB688); this.mainPlayList.set('selectedIndex', 17)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 47,
           "width": 139,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 13.21,
        "yaw": 167.24,
        "pitch": -32.25
       }
      ],
      "items": [
       {
        "yaw": 167.24,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 94,
           "width": 279,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 13.21,
        "pitch": -32.25
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_A5A62D4E_B9E0_7B04_41B6_B465408D8320",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_1_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 21.56,
        "yaw": 161.33,
        "pitch": -55.52
       }
      ],
      "items": [
       {
        "yaw": 161.33,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 680,
           "width": 680,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 21.56,
        "pitch": -55.52
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_A49CC8D6_B9E0_1904_41C8_073D45E28CCD",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 16)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 54,
           "width": 200,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_2_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 21.58,
        "yaw": 18.46,
        "pitch": -30.76
       }
      ],
      "items": [
       {
        "yaw": 18.46,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 122,
           "width": 448,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_2_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 21.58,
        "pitch": -30.76
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_A4C15A3D_B9E0_1904_41E1_DEC22124EC41",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_3_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 22.8,
        "yaw": 23.81,
        "pitch": -53.24
       }
      ],
      "items": [
       {
        "yaw": 23.81,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 680,
           "width": 680,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_3_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 22.8,
        "pitch": -53.24
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_A484C61F_B9E0_0904_41DC_672A017B9B1C",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B1BA438E_B960_0F04_41D9_09A743775031, this.camera_9221FD20_BB60_1B3C_41DF_36F7860921F4); this.mainPlayList.set('selectedIndex', 18)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 51,
           "width": 173,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_4_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 17.38,
        "yaw": -108.97,
        "pitch": -26.38
       }
      ],
      "items": [
       {
        "yaw": -108.97,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 102,
           "width": 346,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_4_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 17.38,
        "pitch": -26.38
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_A4C57085_B9E0_0904_41BD_3597FF4776F3",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 36,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_5_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 28.37,
        "yaw": -109.71,
        "pitch": -38.38
       }
      ],
      "items": [
       {
        "yaw": -109.71,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 285,
           "width": 646,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_5_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 28.37,
        "pitch": -38.38
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_A567FC86_B9E0_1904_41B9_5DEB4FFBEC74",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B1BA812A_B960_0B0C_41B0_9FED0A7E75CC, this.camera_922C4D14_BB60_1B04_41B3_5CC5556B6507); this.mainPlayList.set('selectedIndex', 19)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 68,
           "width": 159,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_6_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 16.25,
        "yaw": -71.63,
        "pitch": -24.67
       }
      ],
      "items": [
       {
        "yaw": -71.63,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 136,
           "width": 319,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_6_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 16.25,
        "pitch": -24.67
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_A4C1A50F_B9E0_0B04_41E0_1DD3C48A9905",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 52,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_7_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 31.31,
        "yaw": -63.24,
        "pitch": -35.52
       }
      ],
      "items": [
       {
        "yaw": -63.24,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 211,
           "width": 687,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_7_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 31.31,
        "pitch": -35.52
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_A4D5E867_B9E0_3904_41E3_C9BD4ABFEB95",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 20)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 47,
           "width": 135,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_8_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 14.6,
        "yaw": -21.92,
        "pitch": -16.29
       }
      ],
      "items": [
       {
        "yaw": -21.92,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 95,
           "width": 271,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_8_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 14.6,
        "pitch": -16.29
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_A412953B_B9E0_0B0C_41DC_24C353CC6810",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_9_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 29.55,
        "yaw": -16.95,
        "pitch": -39.14
       }
      ],
      "items": [
       {
        "yaw": -16.95,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 680,
           "width": 680,
           "url": "media/panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_0_HS_9_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 29.55,
        "pitch": -39.14
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_B1BA3524_B960_0B04_41E6_107D2E918B05",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "yaw": 167.24,
    "backwardYaw": 52.18,
    "panorama": {
     "thumbnailUrl": "media/panorama_B1BA742E_B960_0905_41C6_DF0A7B40FCB1_t.jpg",
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_B1BA742E_B960_0905_41C6_DF0A7B40FCB1_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_B1BA742E_B960_0905_41C6_DF0A7B40FCB1.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_B1BA742E_B960_0905_41C6_DF0A7B40FCB1_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_A6C6708C_B920_0905_41E3_6E1E2734559D",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B1BA3524_B960_0B04_41E6_107D2E918B05, this.camera_930C6F43_BB60_177C_41E2_0B2D88516C82); this.mainPlayList.set('selectedIndex', 15)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 70,
              "width": 200,
              "url": "media/panorama_B1BA742E_B960_0905_41C6_DF0A7B40FCB1_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 20.33,
           "yaw": 52.18,
           "pitch": -42.95
          }
         ],
         "items": [
          {
           "yaw": 52.18,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 177,
              "width": 496,
              "url": "media/panorama_B1BA742E_B960_0905_41C6_DF0A7B40FCB1_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 20.33,
           "pitch": -42.95
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_A76DEE58_B920_790C_41BB_04A75EB1593D",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 16,
              "url": "media/panorama_B1BA742E_B960_0905_41C6_DF0A7B40FCB1_0_HS_1_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 14.91,
           "yaw": 58.48,
           "pitch": -66.95
          }
         ],
         "items": [
          {
           "yaw": 58.48,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 680,
              "width": 680,
              "url": "media/panorama_B1BA742E_B960_0905_41C6_DF0A7B40FCB1_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 14.91,
           "pitch": -66.95
          }
         ]
        }
       ]
      }
     ],
     "id": "panorama_B1BA742E_B960_0905_41C6_DF0A7B40FCB1",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "yaw": 52.18,
       "backwardYaw": 167.24,
       "panorama": "this.panorama_B1BA3524_B960_0B04_41E6_107D2E918B05",
       "distance": 1
      }
     ],
     "hfov": 360,
     "partial": false,
     "pitch": 0,
     "class": "Panorama",
     "label": "B.Pascal_BCuartos",
     "vfov": 180,
     "hfovMax": 120,
     "hfovMin": 120
    },
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "yaw": -71.63,
    "backwardYaw": -145.16,
    "panorama": {
     "thumbnailUrl": "media/panorama_B1BA812A_B960_0B0C_41B0_9FED0A7E75CC_t.jpg",
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_B1BA812A_B960_0B0C_41B0_9FED0A7E75CC_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_B1BA812A_B960_0B0C_41B0_9FED0A7E75CC.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_B1BA812A_B960_0B0C_41B0_9FED0A7E75CC_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_A6A62C60_B920_393C_41E6_35530B844F7F",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B1BA3524_B960_0B04_41E6_107D2E918B05, this.camera_9338FF64_BB60_1704_41E3_E30F981BFF63); this.mainPlayList.set('selectedIndex', 15)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 78,
              "width": 166,
              "url": "media/panorama_B1BA812A_B960_0B0C_41B0_9FED0A7E75CC_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 16.86,
           "yaw": -145.16,
           "pitch": -25.24
          }
         ],
         "items": [
          {
           "yaw": -145.16,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 156,
              "width": 333,
              "url": "media/panorama_B1BA812A_B960_0B0C_41B0_9FED0A7E75CC_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 16.86,
           "pitch": -25.24
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_A72F7853_B920_F903_41D8_FDF082990F37",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 25,
              "url": "media/panorama_B1BA812A_B960_0B0C_41B0_9FED0A7E75CC_0_HS_1_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 25.14,
           "yaw": -135.62,
           "pitch": -40.67
          }
         ],
         "items": [
          {
           "yaw": -135.62,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 367,
              "width": 592,
              "url": "media/panorama_B1BA812A_B960_0B0C_41B0_9FED0A7E75CC_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 25.14,
           "pitch": -40.67
          }
         ]
        }
       ]
      }
     ],
     "id": "panorama_B1BA812A_B960_0B0C_41B0_9FED0A7E75CC",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "yaw": -145.16,
       "backwardYaw": -71.63,
       "panorama": "this.panorama_B1BA3524_B960_0B04_41E6_107D2E918B05",
       "distance": 1
      }
     ],
     "hfov": 360,
     "partial": false,
     "pitch": 0,
     "class": "Panorama",
     "label": "B.Pascal_Cuarto2",
     "vfov": 180,
     "hfovMax": 120,
     "hfovMin": 120
    },
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "yaw": -108.97,
    "backwardYaw": -31.82,
    "panorama": {
     "thumbnailUrl": "media/panorama_B1BA438E_B960_0F04_41D9_09A743775031_t.jpg",
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_B1BA438E_B960_0F04_41D9_09A743775031_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_B1BA438E_B960_0F04_41D9_09A743775031.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_B1BA438E_B960_0F04_41D9_09A743775031_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_A7F8F909_B9E0_7B0C_41BB_0D3113C13824",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B1BA3524_B960_0B04_41E6_107D2E918B05, this.camera_90ED9052_BB60_091C_41DF_0E40AAC16346); this.mainPlayList.set('selectedIndex', 15)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 81,
              "width": 142,
              "url": "media/panorama_B1BA438E_B960_0F04_41D9_09A743775031_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 14.65,
           "yaw": -31.82,
           "pitch": -23.52
          }
         ],
         "items": [
          {
           "yaw": -31.82,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 163,
              "width": 285,
              "url": "media/panorama_B1BA438E_B960_0F04_41D9_09A743775031_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 14.65,
           "pitch": -23.52
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_A47C6078_B9E0_090C_41BD_7643C93BA7D9",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 16,
              "url": "media/panorama_B1BA438E_B960_0F04_41D9_09A743775031_0_HS_1_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 25.35,
           "yaw": -27.24,
           "pitch": -48.29
          }
         ],
         "items": [
          {
           "yaw": -27.24,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 680,
              "width": 680,
              "url": "media/panorama_B1BA438E_B960_0F04_41D9_09A743775031_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 25.35,
           "pitch": -48.29
          }
         ]
        }
       ]
      }
     ],
     "id": "panorama_B1BA438E_B960_0F04_41D9_09A743775031",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "yaw": -31.82,
       "backwardYaw": -108.97,
       "panorama": "this.panorama_B1BA3524_B960_0B04_41E6_107D2E918B05",
       "distance": 1
      }
     ],
     "hfov": 360,
     "partial": false,
     "pitch": 0,
     "class": "Panorama",
     "label": "B.Pascal_Cuarto1",
     "vfov": 180,
     "hfovMax": 120,
     "hfovMin": 120
    },
    "distance": 1
   }
  ],
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "label": "B.Pascal_AnteCuartos",
  "vfov": 180,
  "hfovMax": 120,
  "hfovMin": 120
 },
 {
  "id": "panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "thumbnailUrl": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_t.jpg",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_A673B0CD_B920_0904_4197_848202ED5DED",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 17); this.mainPlayList.set('selectedIndex', 17)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 98,
           "width": 125,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 13.62,
        "yaw": -82.3,
        "pitch": -14.57
       }
      ],
      "items": [
       {
        "yaw": -82.3,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 197,
           "width": 251,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 13.62,
        "pitch": -14.57
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_A6F8F8DB_B920_790C_41DF_47D01F743BCE",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 32,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_1_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 17.68,
        "yaw": -79.81,
        "pitch": -21.81
       }
      ],
      "items": [
       {
        "yaw": -79.81,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 170,
           "width": 340,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 17.68,
        "pitch": -21.81
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_9B26115A_B920_0B0C_41BF_1553B9937645",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 18)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 68,
           "width": 142,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_2_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 15.3,
        "yaw": -59.25,
        "pitch": -16.67
       }
      ],
      "items": [
       {
        "yaw": -59.25,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 136,
           "width": 285,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_2_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 15.3,
        "pitch": -16.67
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_994A281C_B920_1904_41D8_E6D80A57C6B9",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 14)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 74,
           "width": 129,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_3_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 13.95,
        "yaw": -104.97,
        "pitch": -15.14
       }
      ],
      "items": [
       {
        "yaw": -104.97,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 149,
           "width": 258,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_3_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 13.95,
        "pitch": -15.14
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_98FE910B_B920_0B0C_41E3_F921E7668F14",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_4_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 30.93,
        "yaw": -101.9,
        "pitch": -35.71
       }
      ],
      "items": [
       {
        "yaw": -101.9,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 680,
           "width": 680,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_4_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 30.93,
        "pitch": -35.71
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_99852487_B920_0903_41E2_9A5665E6AD0F",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 19)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 61,
           "width": 190,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_5_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 19.36,
        "yaw": -42.87,
        "pitch": -24.67
       }
      ],
      "items": [
       {
        "yaw": -42.87,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 122,
           "width": 380,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_5_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 19.36,
        "pitch": -24.67
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_990845BC_B920_0B04_41CA_D44FE5F3B4ED",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 29,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_6_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 20.23,
        "yaw": -59.43,
        "pitch": -25.81
       }
      ],
      "items": [
       {
        "yaw": -59.43,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 217,
           "width": 401,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_6_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 20.23,
        "pitch": -25.81
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_98CE5C37_B920_3904_41DD_C0CEA93F05DE",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 28,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_7_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 19.6,
        "yaw": -43.24,
        "pitch": -36.48
       }
      ],
      "items": [
       {
        "yaw": -43.24,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 245,
           "width": 435,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_7_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 19.6,
        "pitch": -36.48
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_99C2A9F0_B920_1B1C_41E6_4ECCA57CFA8F",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B1BABB65_B960_3F07_41DF_B287F5D32445, this.camera_93D72D44_BB60_1B05_41CF_0592C8342540); this.mainPlayList.set('selectedIndex', 20)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 72,
           "width": 200,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_8_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 23.45,
        "yaw": 37.32,
        "pitch": -36.86
       }
      ],
      "items": [
       {
        "yaw": 37.32,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 190,
           "width": 523,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_8_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 23.45,
        "pitch": -36.86
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_98B1B143_B920_0B7C_41D8_9B5DB8019C57",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_9_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 16.98,
        "yaw": 40.19,
        "pitch": -63.52
       }
      ],
      "items": [
       {
        "yaw": 40.19,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 680,
           "width": 680,
           "url": "media/panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_0_HS_9_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 16.98,
        "pitch": -63.52
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "yaw": 37.32,
    "backwardYaw": -101.92,
    "panorama": {
     "thumbnailUrl": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_t.jpg",
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_98C9B5AA_B920_0B0C_41C3_8E29B1BDA575",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 22)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 71,
              "width": 166,
              "url": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 15.79,
           "yaw": -136.39,
           "pitch": -32.1
          }
         ],
         "items": [
          {
           "yaw": -136.39,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 142,
              "width": 333,
              "url": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 15.79,
           "pitch": -32.1
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_995A838B_B920_0F0C_41C2_B5F8A9AC06DF",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 16,
              "url": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_0_HS_1_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 21.36,
           "yaw": -132.76,
           "pitch": -55.9
          }
         ],
         "items": [
          {
           "yaw": -132.76,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 680,
              "width": 680,
              "url": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 21.36,
           "pitch": -55.9
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_9B6C523E_B920_0905_41AC_C6F363E1BDD0",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801, this.camera_9397FDAD_BB60_1B04_41C4_1EE82BE4C5F9); this.mainPlayList.set('selectedIndex', 16)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 91,
              "width": 183,
              "url": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_0_HS_2_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 17.03,
           "yaw": -101.92,
           "pitch": -34
          }
         ],
         "items": [
          {
           "yaw": -101.92,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 183,
              "width": 367,
              "url": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_0_HS_2_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 17.03,
           "pitch": -34
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_98FA1E78_B920_390C_41E5_5D82851C955F",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 43,
              "url": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_0_HS_3_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 23.79,
           "yaw": -95.62,
           "pitch": -45.43
          }
         ],
         "items": [
          {
           "yaw": -95.62,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 224,
              "width": 605,
              "url": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_0_HS_3_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 23.79,
           "pitch": -45.43
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_9B38BDD0_B920_3B1D_418E_04BC5FA746CA",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 24)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 78,
              "width": 169,
              "url": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_0_HS_4_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 16.63,
           "yaw": 132.37,
           "pitch": -29.05
          }
         ],
         "items": [
          {
           "yaw": 132.37,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 156,
              "width": 339,
              "url": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_0_HS_4_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 16.63,
           "pitch": -29.05
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_9913C3D3_B920_0F1C_41C4_C5E2297DF5D3",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 16,
              "url": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_0_HS_5_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 22.6,
           "yaw": 141.52,
           "pitch": -53.62
          }
         ],
         "items": [
          {
           "yaw": 141.52,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 680,
              "width": 680,
              "url": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_0_HS_5_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 22.6,
           "pitch": -53.62
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_9B08AEA6_B920_1904_41CC_1073ED80FBCE",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B1BA8C5F_B960_3904_41E2_EFF37F6A3CB0, this.camera_93824DD2_BB60_1B1C_41B3_F259B645A8F0); this.mainPlayList.set('selectedIndex', 21)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 61,
              "width": 139,
              "url": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_0_HS_6_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 15.25,
           "yaw": 12.56,
           "pitch": -12.1
          }
         ],
         "items": [
          {
           "yaw": 12.56,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 122,
              "width": 278,
              "url": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_0_HS_6_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 15.25,
           "pitch": -12.1
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_9899FC6A_B920_190C_41D9_7F514E03E999",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 15,
              "width": 34,
              "url": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_0_HS_7_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 22.46,
           "yaw": 14.48,
           "pitch": -20.67
          }
         ],
         "items": [
          {
           "yaw": 14.48,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 197,
              "width": 428,
              "url": "media/panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_0_HS_7_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 22.46,
           "pitch": -20.67
          }
         ]
        }
       ]
      }
     ],
     "id": "panorama_B1BABB65_B960_3F07_41DF_B287F5D32445",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "yaw": -101.92,
       "backwardYaw": 37.32,
       "panorama": "this.panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801",
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "yaw": 12.56,
       "backwardYaw": 164.95,
       "panorama": {
        "thumbnailUrl": "media/panorama_B1BA8C5F_B960_3904_41E2_EFF37F6A3CB0_t.jpg",
        "frames": [
         {
          "sphere": {
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_B1BA8C5F_B960_3904_41E2_EFF37F6A3CB0_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_B1BA8C5F_B960_3904_41E2_EFF37F6A3CB0.jpeg"
            }
           ],
           "class": "ImageResource"
          },
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_B1BA8C5F_B960_3904_41E2_EFF37F6A3CB0_t.jpg",
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_9A8FA1E6_B920_0B04_41C5_4C1B786FDB7C",
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_B1BABB65_B960_3F07_41DF_B287F5D32445, this.camera_93CEED50_BB60_1B1C_41E5_5C9A083821EC); this.mainPlayList.set('selectedIndex', 20)"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 115,
                 "width": 200,
                 "url": "media/panorama_B1BA8C5F_B960_3904_41E2_EFF37F6A3CB0_0_HS_0_0_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 24.7,
              "yaw": 164.95,
              "pitch": -27.35
             }
            ],
            "items": [
             {
              "yaw": 164.95,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 286,
                 "width": 497,
                 "url": "media/panorama_B1BA8C5F_B960_3904_41E2_EFF37F6A3CB0_0_HS_0_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 24.7,
              "pitch": -27.35
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_9A9BFF6D_B920_1704_41D3_CD54083FB684",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 16,
                 "width": 16,
                 "url": "media/panorama_B1BA8C5F_B960_3904_41E2_EFF37F6A3CB0_0_HS_1_0_map.gif"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 23,
              "yaw": 171.24,
              "pitch": -52.86
             }
            ],
            "items": [
             {
              "yaw": 171.24,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 680,
                 "width": 680,
                 "url": "media/panorama_B1BA8C5F_B960_3904_41E2_EFF37F6A3CB0_0_HS_1_0.png"
                }
               ],
               "class": "ImageResource"
              },
              "hfov": 23,
              "pitch": -52.86
             }
            ]
           }
          ]
         }
        ],
        "id": "panorama_B1BA8C5F_B960_3904_41E2_EFF37F6A3CB0",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "yaw": 164.95,
          "backwardYaw": 12.56,
          "panorama": "this.panorama_B1BABB65_B960_3F07_41DF_B287F5D32445",
          "distance": 1
         }
        ],
        "hfov": 360,
        "partial": false,
        "pitch": 0,
        "class": "Panorama",
        "label": "B.Pascal_CuartoPrin2",
        "vfov": 180,
        "hfovMax": 120,
        "hfovMin": 120
       },
       "distance": 1
      }
     ],
     "hfov": 360,
     "partial": false,
     "pitch": 0,
     "class": "Panorama",
     "label": "B.Pascal_CuartoPrin",
     "vfov": 180,
     "hfovMax": 120,
     "hfovMin": 120
    },
    "distance": 1
   }
  ],
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "label": "B.Pascal_AnteCuarto2",
  "vfov": 180,
  "hfovMax": 120,
  "hfovMin": 120
 },
 {
  "id": "panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B1BA742E_B960_0905_41C6_DF0A7B40FCB1",
 {
  "id": "panorama_B1BA742E_B960_0905_41C6_DF0A7B40FCB1_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B1BA438E_B960_0F04_41D9_09A743775031",
 {
  "id": "panorama_B1BA438E_B960_0F04_41D9_09A743775031_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B1BA812A_B960_0B0C_41B0_9FED0A7E75CC",
 {
  "id": "panorama_B1BA812A_B960_0B0C_41B0_9FED0A7E75CC_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B1BABB65_B960_3F07_41DF_B287F5D32445",
 {
  "id": "panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B1BA8C5F_B960_3904_41E2_EFF37F6A3CB0",
 {
  "id": "panorama_B1BA8C5F_B960_3904_41E2_EFF37F6A3CB0_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "thumbnailUrl": "media/panorama_B1BAD8EF_B960_1904_41D1_D1711AA44CAA_t.jpg",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_B1BAD8EF_B960_1904_41D1_D1711AA44CAA_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B1BAD8EF_B960_1904_41D1_D1711AA44CAA.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B1BAD8EF_B960_1904_41D1_D1711AA44CAA_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_9B97EC09_B920_390C_41C2_60CF8770760E",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 67,
           "width": 200,
           "url": "media/panorama_B1BAD8EF_B960_1904_41D1_D1711AA44CAA_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 26.56,
        "yaw": -134.11,
        "pitch": -38.38
       }
      ],
      "items": [
       {
        "yaw": -134.11,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 204,
           "width": 605,
           "url": "media/panorama_B1BAD8EF_B960_1904_41D1_D1711AA44CAA_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 26.56,
        "pitch": -38.38
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_9812844F_B920_0904_41E0_7675D8A29B70",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 42,
           "url": "media/panorama_B1BAD8EF_B960_1904_41D1_D1711AA44CAA_0_HS_1_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 30.47,
        "yaw": -127.05,
        "pitch": -55.71
       }
      ],
      "items": [
       {
        "yaw": -127.05,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 360,
           "width": 966,
           "url": "media/panorama_B1BAD8EF_B960_1904_41D1_D1711AA44CAA_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 30.47,
        "pitch": -55.71
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_9BA8FA52_B920_191C_41E7_1AFA80F7562B",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B1BA8669_B960_090C_41D4_79EECFEB4F13, this.camera_93C0AD5B_BB60_1B0C_41E5_5E7C8409C597); this.mainPlayList.set('selectedIndex', 23)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 71,
           "width": 186,
           "url": "media/panorama_B1BAD8EF_B960_1904_41D1_D1711AA44CAA_0_HS_2_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 18.87,
        "yaw": 7.22,
        "pitch": -25.62
       }
      ],
      "items": [
       {
        "yaw": 7.22,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 142,
           "width": 373,
           "url": "media/panorama_B1BAD8EF_B960_1904_41D1_D1711AA44CAA_0_HS_2_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 18.87,
        "pitch": -25.62
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_9B4F1E86_B920_1904_41E3_90A6CB909C72",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16,
           "url": "media/panorama_B1BAD8EF_B960_1904_41D1_D1711AA44CAA_0_HS_3_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 23.8,
        "yaw": 15.43,
        "pitch": -51.33
       }
      ],
      "items": [
       {
        "yaw": 15.43,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 680,
           "width": 680,
           "url": "media/panorama_B1BAD8EF_B960_1904_41D1_D1711AA44CAA_0_HS_3_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 23.8,
        "pitch": -51.33
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_B1BAD8EF_B960_1904_41D1_D1711AA44CAA",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "yaw": 7.22,
    "backwardYaw": -153.73,
    "panorama": {
     "thumbnailUrl": "media/panorama_B1BA8669_B960_090C_41D4_79EECFEB4F13_t.jpg",
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_B1BA8669_B960_090C_41D4_79EECFEB4F13_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_B1BA8669_B960_090C_41D4_79EECFEB4F13.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_B1BA8669_B960_090C_41D4_79EECFEB4F13_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_9B5390B4_B920_0905_41E3_CAAA01FD5CDB",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B1BAD8EF_B960_1904_41D1_D1711AA44CAA, this.camera_923F6CF1_BB60_191C_41E4_44F4E34FA3B7); this.mainPlayList.set('selectedIndex', 22)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 83,
              "width": 200,
              "url": "media/panorama_B1BA8669_B960_090C_41D4_79EECFEB4F13_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 20.55,
           "yaw": -153.73,
           "pitch": -43.14
          }
         ],
         "items": [
          {
           "yaw": -153.73,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 211,
              "width": 503,
              "url": "media/panorama_B1BA8669_B960_090C_41D4_79EECFEB4F13_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 20.55,
           "pitch": -43.14
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_9B8B88BE_B920_1904_41E0_62F7C7E92F8C",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 16,
              "url": "media/panorama_B1BA8669_B960_090C_41D4_79EECFEB4F13_0_HS_1_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 14.68,
           "yaw": -147.62,
           "pitch": -67.33
          }
         ],
         "items": [
          {
           "yaw": -147.62,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 680,
              "width": 680,
              "url": "media/panorama_B1BA8669_B960_090C_41D4_79EECFEB4F13_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 14.68,
           "pitch": -67.33
          }
         ]
        }
       ]
      }
     ],
     "id": "panorama_B1BA8669_B960_090C_41D4_79EECFEB4F13",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "yaw": -153.73,
       "backwardYaw": 7.22,
       "panorama": "this.panorama_B1BAD8EF_B960_1904_41D1_D1711AA44CAA",
       "distance": 1
      }
     ],
     "hfov": 360,
     "partial": false,
     "pitch": 0,
     "class": "Panorama",
     "label": "B.Pascal_CuartPClos2",
     "vfov": 180,
     "hfovMax": 120,
     "hfovMin": 120
    },
    "distance": 1
   }
  ],
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "label": "B.Pascal_CuartPClos1",
  "vfov": 180,
  "hfovMax": 120,
  "hfovMin": 120
 },
 {
  "id": "panorama_B1BAD8EF_B960_1904_41D1_D1711AA44CAA_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B1BA8669_B960_090C_41D4_79EECFEB4F13",
 {
  "id": "panorama_B1BA8669_B960_090C_41D4_79EECFEB4F13_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "thumbnailUrl": "media/panorama_B1BA934E_B960_0F04_41B1_8CA41862B84E_t.jpg",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_B1BA934E_B960_0F04_41B1_8CA41862B84E_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_B1BA934E_B960_0F04_41B1_8CA41862B84E.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B1BA934E_B960_0F04_41B1_8CA41862B84E_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_9A8B5A00_B920_78FC_41D7_2B4B7384D1A1",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_B1BADEF7_B960_1904_41E0_3265676BD99D, this.camera_909EC073_BB60_091C_41DA_FD5EF49168A3); this.mainPlayList.set('selectedIndex', 25)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 57,
           "width": 197,
           "url": "media/panorama_B1BA934E_B960_0F04_41B1_8CA41862B84E_0_HS_0_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 20.15,
        "yaw": -0.2,
        "pitch": -24.1
       }
      ],
      "items": [
       {
        "yaw": -0.2,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 115,
           "width": 394,
           "url": "media/panorama_B1BA934E_B960_0F04_41B1_8CA41862B84E_0_HS_0_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 20.15,
        "pitch": -24.1
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_9BC22F87_B920_3704_41D8_BC56C7931774",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 36,
           "url": "media/panorama_B1BA934E_B960_0F04_41B1_8CA41862B84E_0_HS_1_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 22.59,
        "yaw": 4.76,
        "pitch": -34.57
       }
      ],
      "items": [
       {
        "yaw": 4.76,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 217,
           "width": 490,
           "url": "media/panorama_B1BA934E_B960_0F04_41B1_8CA41862B84E_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 22.59,
        "pitch": -34.57
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_9A189A81_B920_39FC_4196_A9F5338474A0",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 64,
           "width": 200,
           "url": "media/panorama_B1BA934E_B960_0F04_41B1_8CA41862B84E_0_HS_2_0_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 21.42,
        "yaw": -154.68,
        "pitch": -46
       }
      ],
      "items": [
       {
        "yaw": -154.68,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 177,
           "width": 550,
           "url": "media/panorama_B1BA934E_B960_0F04_41B1_8CA41862B84E_0_HS_2_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 21.42,
        "pitch": -46
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_9DB6BA31_B927_F91C_41C5_6037DA6B6B3D",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 28,
           "url": "media/panorama_B1BA934E_B960_0F04_41B1_8CA41862B84E_0_HS_3_0_map.gif"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 17.31,
        "yaw": -150.67,
        "pitch": -62.38
       }
      ],
      "items": [
       {
        "yaw": -150.67,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 381,
           "width": 667,
           "url": "media/panorama_B1BA934E_B960_0F04_41B1_8CA41862B84E_0_HS_3_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 17.31,
        "pitch": -62.38
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_B1BA934E_B960_0F04_41B1_8CA41862B84E",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "yaw": -0.2,
    "backwardYaw": -158.68,
    "panorama": {
     "thumbnailUrl": "media/panorama_B1BADEF7_B960_1904_41E0_3265676BD99D_t.jpg",
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_B1BADEF7_B960_1904_41E0_3265676BD99D_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_B1BADEF7_B960_1904_41E0_3265676BD99D.jpeg"
         }
        ],
        "class": "ImageResource"
       },
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_B1BADEF7_B960_1904_41E0_3265676BD99D_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_9AFA1D46_B920_7B04_41E0_920B2B99D915",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_B1BA934E_B960_0F04_41B1_8CA41862B84E, this.camera_90F02031_BB60_091C_41D2_9C2E0758BA47); this.mainPlayList.set('selectedIndex', 24)"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 76,
              "width": 200,
              "url": "media/panorama_B1BADEF7_B960_1904_41E0_3265676BD99D_0_HS_0_0_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 18.57,
           "yaw": -158.68,
           "pitch": -45.81
          }
         ],
         "items": [
          {
           "yaw": -158.68,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 183,
              "width": 476,
              "url": "media/panorama_B1BADEF7_B960_1904_41E0_3265676BD99D_0_HS_0_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 18.57,
           "pitch": -45.81
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_9DBB8F5A_B920_F70C_41E3_0E9AC3D53E6C",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 16,
              "url": "media/panorama_B1BADEF7_B960_1904_41E0_3265676BD99D_0_HS_1_0_map.gif"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 13.03,
           "yaw": -148,
           "pitch": -70
          }
         ],
         "items": [
          {
           "yaw": -148,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 680,
              "width": 680,
              "url": "media/panorama_B1BADEF7_B960_1904_41E0_3265676BD99D_0_HS_1_0.png"
             }
            ],
            "class": "ImageResource"
           },
           "hfov": 13.03,
           "pitch": -70
          }
         ]
        }
       ]
      }
     ],
     "id": "panorama_B1BADEF7_B960_1904_41E0_3265676BD99D",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "yaw": -158.68,
       "backwardYaw": -0.2,
       "panorama": "this.panorama_B1BA934E_B960_0F04_41B1_8CA41862B84E",
       "distance": 1
      }
     ],
     "hfov": 360,
     "partial": false,
     "pitch": 0,
     "class": "Panorama",
     "label": "B.Pascal_CuartoPBa2",
     "vfov": 180,
     "hfovMax": 120,
     "hfovMin": 120
    },
    "distance": 1
   }
  ],
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "label": "B.Pascal_CuartoPBa1",
  "vfov": 180,
  "hfovMax": 120,
  "hfovMin": 120
 },
 {
  "id": "panorama_B1BA934E_B960_0F04_41B1_8CA41862B84E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_B1BADEF7_B960_1904_41E0_3265676BD99D",
 {
  "id": "panorama_B1BADEF7_B960_1904_41E0_3265676BD99D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "camera": "this.panorama_B1B9EA08_B960_390C_41E0_80C065BDED24_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_B1B9EA08_B960_390C_41E0_80C065BDED24"
   },
   {
    "camera": "this.panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_B40AC319_B960_0F0C_41CB_0106FD7A0922"
   },
   {
    "camera": "this.panorama_B1B907D8_B960_F70C_41E3_AACA0FA407D2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_B1B907D8_B960_F70C_41E3_AACA0FA407D2"
   },
   {
    "camera": "this.panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_B674BF25_B960_3704_41D7_5D86F9FF8AC8"
   },
   {
    "camera": "this.panorama_ABADE77C_B920_1704_41D3_8646895347AE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_ABADE77C_B920_1704_41D3_8646895347AE"
   },
   {
    "camera": "this.panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_B1B974B1_B960_091C_41C3_8CE3AB1E1286"
   },
   {
    "camera": "this.panorama_B1B9021A_B960_090C_41DD_80660F4DCAC8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_B1B9021A_B960_090C_41DD_80660F4DCAC8"
   },
   {
    "camera": "this.panorama_B1B94F2F_B960_1704_41B4_353534488DA7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_B1B94F2F_B960_1704_41B4_353534488DA7"
   },
   {
    "camera": "this.panorama_B1B91C13_B960_791C_41AF_74AC6E483647_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_B1B91C13_B960_791C_41AF_74AC6E483647"
   },
   {
    "camera": "this.panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_B1B9394A_B960_1B0C_41D1_BA994A7B36C2"
   },
   {
    "camera": "this.panorama_B1B91836_B960_3904_41D2_D5170F93C476_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_B1B91836_B960_3904_41D2_D5170F93C476"
   },
   {
    "camera": "this.panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_B1B9C5D0_B960_0B1C_41D1_5907F9326898"
   },
   {
    "camera": "this.panorama_B1B93A45_B960_1907_41E0_37A2840BE189_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_B1B93A45_B960_1907_41E0_37A2840BE189"
   },
   {
    "camera": "this.panorama_B378E817_B960_1904_4173_D530B6BE57DD_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.panorama_B378E817_B960_1904_4173_D530B6BE57DD"
   },
   {
    "camera": "this.panorama_B1BC579B_B960_170C_41D0_4539C9DCAD7D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "media": "this.panorama_B1BC579B_B960_170C_41D0_4539C9DCAD7D"
   },
   {
    "camera": "this.panorama_B1BA3524_B960_0B04_41E6_107D2E918B05_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_B1BA3524_B960_0B04_41E6_107D2E918B05"
   },
   {
    "camera": "this.panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "media": "this.panorama_B1BABDFC_B960_1B05_4199_2CBCB4817801"
   },
   {
    "camera": "this.panorama_B1BA742E_B960_0905_41C6_DF0A7B40FCB1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "media": "this.panorama_B1BA742E_B960_0905_41C6_DF0A7B40FCB1"
   },
   {
    "camera": "this.panorama_B1BA438E_B960_0F04_41D9_09A743775031_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "media": "this.panorama_B1BA438E_B960_0F04_41D9_09A743775031"
   },
   {
    "camera": "this.panorama_B1BA812A_B960_0B0C_41B0_9FED0A7E75CC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "media": "this.panorama_B1BA812A_B960_0B0C_41B0_9FED0A7E75CC"
   },
   {
    "camera": "this.panorama_B1BABB65_B960_3F07_41DF_B287F5D32445_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "media": "this.panorama_B1BABB65_B960_3F07_41DF_B287F5D32445"
   },
   {
    "camera": "this.panorama_B1BA8C5F_B960_3904_41E2_EFF37F6A3CB0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "media": "this.panorama_B1BA8C5F_B960_3904_41E2_EFF37F6A3CB0"
   },
   {
    "camera": "this.panorama_B1BAD8EF_B960_1904_41D1_D1711AA44CAA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
    "media": "this.panorama_B1BAD8EF_B960_1904_41D1_D1711AA44CAA"
   },
   {
    "camera": "this.panorama_B1BA8669_B960_090C_41D4_79EECFEB4F13_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
    "media": "this.panorama_B1BA8669_B960_090C_41D4_79EECFEB4F13"
   },
   {
    "camera": "this.panorama_B1BA934E_B960_0F04_41B1_8CA41862B84E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
    "media": "this.panorama_B1BA934E_B960_0F04_41B1_8CA41862B84E"
   },
   {
    "camera": "this.panorama_B1BADEF7_B960_1904_41E0_3265676BD99D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 0)",
    "media": "this.panorama_B1BADEF7_B960_1904_41E0_3265676BD99D"
   }
  ]
 },
 {
  "id": "camera_921A2C90_BB60_191C_41D0_4673EC15E090",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 12.37,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_921E9C9D_BB60_1907_41DB_6D816A109EC4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -62.49,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9212DCAD_BB60_1904_41C7_D9780C8B8226",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 49.51,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9216BCB8_BB60_190C_41DC_FBE9DE6AB09F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 73.7,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_920BECC3_BB60_197C_41E5_105FC9541DDD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -120.97,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_920CCCCE_BB60_1904_41E5_BA4B6242E4DA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -23.05,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9201CCDA_BB60_190C_41E7_1D136A928D60",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.8,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_923A9CE5_BB60_1907_41DE_D7B3D1687C2A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 25.89,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_923F6CF1_BB60_191C_41E4_44F4E34FA3B7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.78,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_92303CFC_BB60_1904_41AE_B3FC77F5353C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -157.16,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_922A2D08_BB60_1B0C_419B_69DDD18EB688",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -127.82,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_922C4D14_BB60_1B04_41B3_5CC5556B6507",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 34.84,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9221FD20_BB60_1B3C_41DF_36F7860921F4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 148.18,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_93DBAD2B_BB60_1B0C_41CD_0FD7B502F60F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -75.06,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_93DD9D39_BB60_1B0C_41CC_6319B9F38233",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 16.94,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_93D72D44_BB60_1B05_41CF_0592C8342540",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 78.08,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_93CEED50_BB60_1B1C_41E5_5C9A083821EC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -167.44,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_93C0AD5B_BB60_1B0C_41E5_5E7C8409C597",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 26.27,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_93FA8D67_BB60_1B04_41E2_68E8745097B7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 82.27,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_93FC2D73_BB60_1B1C_41E4_7921078847A7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 175.22,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_93F7DD7F_BB60_1B04_41E5_F90F960A518C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 61.13,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_93E98D8A_BB60_1B0C_41BE_BA12A28107D6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 168.37,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_93E33D95_BB60_1B07_41C8_E94F2A5D2383",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -86.87,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_93996DA1_BB60_1B3C_41E5_183ACE11D8DB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -60.97,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9397FDAD_BB60_1B04_41C4_1EE82BE4C5F9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -142.68,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_93824DD2_BB60_1B1C_41B3_F259B645A8F0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -15.05,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_93BEDDF3_BB60_1B1C_4188_190284B40A56",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -14.1,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_93B54E15_BB60_1904_41D8_F3DC2B8FB55C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.68,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_93A1FE36_BB60_1901_41E7_5B2876D6CE90",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -9.71,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_935DCE5C_BB60_1904_41D6_5E201203B6C4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 76.94,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_93483E7D_BB60_1904_41D0_CAE4CF12C462",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 15.8,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9344BE9E_BB60_1904_41DD_DD0D3726F526",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 163.8,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_93731EBF_BB60_1904_41B6_ADC8EC6655A7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -53.35,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_936FBEE0_BB60_193C_41D3_3C37CF89442C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 175.8,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_931BFF01_BB60_18FC_4172_FA3AD06421FE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 15.8,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_93162F22_BB60_173C_41D7_1DF0CCFA6001",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 72.75,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_930C6F43_BB60_177C_41E2_0B2D88516C82",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -12.76,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9338FF64_BB60_1704_41E3_E30F981BFF63",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 108.37,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_93371F85_BB60_1704_41D3_9F2A1D80C21E",
  "automaticRotationSpeed": 17,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -74.3,
   "pitch": 0
  },
  "manualRotationSpeed": 1391,
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9320FFA7_BB60_1704_4182_1EB3E4488288",
  "automaticRotationSpeed": 17,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 172.75,
   "pitch": 0
  },
  "manualRotationSpeed": 1391,
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_90DCDFC7_BB60_1704_41E7_238CCAB27FB2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -18.29,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_90C86FEC_BB60_1704_41C1_277F300E5D91",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 114.65,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_90C47010_BB60_091C_41E4_3B2FBA784037",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -14.29,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_90F02031_BB60_091C_41D2_9C2E0758BA47",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.8,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_90ED9052_BB60_091C_41DF_0E40AAC16346",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 71.03,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_909EC073_BB60_091C_41DA_FD5EF49168A3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 21.32,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 }
], "children": [
 {
  "toolTipBorderColor": "#767676",
  "transitionMode": "blending",
  "toolTipFontWeight": "normal",
  "toolTipTextShadowBlurRadius": 3,
  "shadow": false,
  "progressBarBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "paddingLeft": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipBorderSize": 1,
  "paddingBottom": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundOpacity": 1,
  "playbackBarRight": 0,
  "paddingTop": 0,
  "progressBorderSize": 0,
  "progressLeft": 0,
  "playbackBarOpacity": 1,
  "playbackBarBorderSize": 0,
  "toolTipOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "toolTipPaddingTop": 4,
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "height": "100%",
  "width": "100%",
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowSpread": 0,
  "toolTipFontStyle": "normal",
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarLeft": 0,
  "playbackBarHeadBorderSize": 0,
  "borderSize": 0,
  "playbackBarHeadHeight": 15,
  "progressBarBorderRadius": 0,
  "progressBorderRadius": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "id": "MainViewer",
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderSize": 0,
  "toolTipFontFamily": "Arial",
  "progressBarBorderColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "minHeight": 50,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipPaddingRight": 6,
  "toolTipShadowOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColorDirection": "vertical",
  "toolTipPaddingLeft": 6,
  "playbackBarBottom": 5,
  "progressBarOpacity": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "progressRight": 0,
  "playbackBarProgressOpacity": 1,
  "borderRadius": 0,
  "progressOpacity": 1,
  "toolTipFontColor": "#606060",
  "progressHeight": 10,
  "minWidth": 100,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderRadius": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "progressBorderColor": "#000000",
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontSize": 14,
  "toolTipShadowHorizontalLength": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadow": true,
  "playbackBarHeadWidth": 6,
  "playbackBarHeight": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarProgressBorderRadius": 0,
  "paddingRight": 0
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "gap": 10,
 "vrPolyfillScale": 0.8,
 "id": "rootPlayer",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "minHeight": 20,
 "shadow": false,
 "class": "Player",
 "paddingLeft": 0,
 "scripts": {
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "existsKey": function(key){  return key in window; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "unregisterKey": function(key){  delete window[key]; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getKey": function(key){  return window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } }
 },
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "height": "100%",
 "width": "100%",
 "layout": "absolute",
 "overflow": "visible",
 "paddingRight": 0,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "borderSize": 0
})