<template>
  <view class="page flex-col">
    <view class="group_1 flex-col">
      <view class="group_2 flex-col">
        <image
          class="image_1"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/psuvtbw3djlyb6iwwp7xlw0hb8toxzkn22u051cdfaa-5a07-4636-af90-a31c6fac2a4d"
        />
        <view class="block_1 flex-row">
          <image
            class="label_1"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps9g949redfj5pcip8qy9l4ebew5xxm8lqc25c5c847-6331-4fa5-b63a-6f0838aa14c7"
          />
          <text class="text_1">中央空调网</text>
          <view class="group_3 flex-row justify-between">
            <image
              class="image_2"
              referrerpolicy="no-referrer"
              src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4325300cbc47460fbdd310d24066bf37_mergeImage.png"
            />
            <view class="group_4 flex-col">
              <view class="box_1 flex-col"></view>
            </view>
          </view>
        </view>
        <view class="block_2 flex-row justify-between">
          <view class="image-text_1 flex-row justify-between">
            <text class="text-group_1">郑州</text>
            <image
              class="thumbnail_1"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/psn0jpa0rv4jokgnpjgiyspa6d5ap30qwvka8534697-34f3-4d04-ad86-53aa6ed0ac52"
            />
          </view>
          <view class="text-wrapper_1 flex-col">
            <text class="text_2">搜索想要的空调产品</text>
          </view>
          <view class="image-wrapper_1 flex-col">
            <image
              class="label_2"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/psw4nwituqqx3r50bcwxgfg83sr3quspne5a3be6d-8a94-4d2f-bc05-d6de8432663e"
            />
          </view>
        </view>
      </view>
      <view class="group_5 flex-col">
        <view class="block_3 flex-row justify-between">
          <view class="section_1 flex-row">
            <view class="image-text_2 flex-row justify-between">
              <view class="image-wrapper_2 flex-col">
                <image
                  class="label_3"
                  referrerpolicy="no-referrer"
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/psq63r732ca5rn504yk8a2clf8hu9b1dfob6d2ed2a-de70-4b06-9e11-25158cfe78fb"
                />
              </view>
              <view class="text-group_2 flex-col justify-between">
                <text class="text_3">我要买空调</text>
                <text class="text_4">一键发布&nbsp;&nbsp;快速匹配</text>
              </view>
            </view>
          </view>
          <view class="section_2 flex-row">
            <view class="image-text_3 flex-row justify-between">
              <view class="image-wrapper_3 flex-col">
                <image
                  class="label_4"
                  referrerpolicy="no-referrer"
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/psn3dcdizkqz9jq4mx1m2p5ilydjncibdtd7145521-618b-4ef8-b8a3-9213ba71832b"
                />
              </view>
              <view class="text-group_3 flex-col justify-between">
                <text class="text_5">我要卖空调</text>
                <text class="text_6">一键发布&nbsp;&nbsp;快速匹配</text>
              </view>
            </view>
          </view>
        </view>
        <view class="block_4 flex-col">
          <view class="list_1 flex-row">
            <view
              class="image-text_4 flex-col justify-between"
              v-for="(item, index) in loopData0"
              :key="index"
            >
              <image
                class="image_3"
                referrerpolicy="no-referrer"
                :src="item.lanhuimage0"
              />
              <text
                class="text-group_4"
                :style="{ color: item.lanhufontColor0 }"
                v-html="item.lanhutext0"
              ></text>
            </view>
          </view>
          <view class="box_2 flex-row">
            <view class="image-text_5 flex-col justify-between">
              <image
                class="image_4"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps8znjrl7mx2i03sgims45tcuefkc4utkw6b9f6b67a-6c14-44f6-b04e-c49852b7211a"
              />
              <text class="text-group_5">志高</text>
            </view>
            <view class="image-text_6 flex-col justify-between">
              <image
                class="image_5"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps95mtybpw0jn16vy7ne5aficxkyag434f645f595-76fe-41a1-a4d6-9a3b53212d86"
              />
              <text class="text-group_6">春兰</text>
            </view>
            <view class="image-text_7 flex-col justify-between">
              <image
                class="image_6"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps68lxzf74xatwli5mjhxsrri6j0fyo3ygf0a24a1d-76d4-4dca-b665-f46a217f59c9"
              />
              <text class="text-group_7">美的</text>
            </view>
            <view class="image-text_8 flex-col justify-between">
              <image
                class="image_7"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/psfajjjbfkbuwwrq5e0a45sh2n7n8jxvhoj0f9f9ec6-117f-43f4-bd2a-e1d9c5d668e1"
              />
              <text class="text-group_8">奥克斯</text>
            </view>
            <view class="image-text_9 flex-row justify-between">
              <image
                class="label_5"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps8w062b4dww78ren5gnd20n7t1lgq9wifk1489dc63-ba6a-4b28-81df-764d45f40f3c"
              />
              <text class="text-group_9">更多</text>
            </view>
          </view>
        </view>
      </view>
      <view class="group_6 flex-col">
        <view class="section_3 flex-row justify-between">
          <text class="text_7">最新求购</text>
          <view class="image-text_10 flex-row justify-between">
            <text class="text-group_10">查看更多</text>
            <image
              class="thumbnail_2"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps9eqtt3izc6df1bfdwxikkb9lerbbb0sf89be13a8-4627-4296-a69e-c90609ca556f"
            />
          </view>
        </view>
        <view class="section_4 flex-row justify-between">
          <view class="section_5 flex-col">
            <view class="section_6 flex-col"></view>
            <view class="section_7 flex-col"></view>
            <view class="section_8 flex-col"></view>
            <view class="section_9 flex-col"></view>
            <view class="section_10 flex-col"></view>
            <view class="section_11 flex-col"></view>
          </view>
          <text class="paragraph_1">
            美的大风管机
            <br />
            求购一台格力壁挂式空调，要求最起码八成新
            <br />
            回收废旧空调压缩机
            <br />
            回收5台1.5匹空调
            <br />
            回收10台二手格力柜式机
            <br />
            回收一台2级能效的格力空调
          </text>
        </view>
      </view>
      <view class="group_7 flex-col">
        <view class="text-wrapper_2 flex-row justify-between">
          <text class="text_8">商家</text>
          <text class="text_9">个人</text>
        </view>
        <image
          class="image_8"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/pse51yslwg3k4c1iry8etfaqemuzsgjt5zl80d1d6dc-7eff-49d0-b223-30c6f46de749"
        />
        <view class="group_8 flex-row justify-between">
          <view class="box_3 flex-col"></view>
          <view class="box_4 flex-col"></view>
        </view>
        <view class="text-wrapper_3 flex-row justify-between">
          <text class="paragraph_2">
            (二手8成新)大金（DAIKIN）
            <br />
            一拖五中央空调,金制全效...
          </text>
          <text class="paragraph_3">
            (二手8成新)大金（DAIKIN）
            <br />
            一拖五中央空调,金制全效...
          </text>
        </view>
        <view class="text-wrapper_4 flex-row">
          <text class="text_10">￥8000.00</text>
          <text class="text_11">郑州</text>
          <text class="text_12">￥8000.00</text>
          <text class="text_13">郑州</text>
        </view>
        <view class="group_9 flex-row justify-between">
          <view class="box_5 flex-col"></view>
          <view class="box_6 flex-col"></view>
        </view>
        <view class="text-wrapper_5 flex-row justify-between">
          <text class="paragraph_4">
            (二手8成新)大金（DAIKIN）
            <br />
            一拖五中央空调,金制全效...
          </text>
          <text class="paragraph_5">
            (二手8成新)大金（DAIKIN）
            <br />
            一拖五中央空调,金制全效...
          </text>
        </view>
        <view class="text-wrapper_6 flex-row">
          <text class="text_14">￥8000.00</text>
          <text class="text_15">郑州</text>
          <text class="text_16">询价</text>
          <text class="text_17">郑州</text>
        </view>
        <view class="group_10 flex-row justify-between">
          <view class="box_7 flex-col"></view>
          <view class="box_8 flex-col"></view>
        </view>
        <view class="text-wrapper_7 flex-row justify-between">
          <text class="paragraph_6">
            (二手8成新)大金（DAIKIN）
            <br />
            一拖五中央空调,金制全效...
          </text>
          <text class="paragraph_7">
            (二手8成新)大金（DAIKIN）
            <br />
            一拖五中央空调,金制全效...
          </text>
        </view>
        <view class="text-wrapper_8 flex-row">
          <text class="text_18">￥8000.00</text>
          <text class="text_19">郑州</text>
          <text class="text_20">￥8000.00</text>
          <text class="text_21">郑州</text>
        </view>
        <view class="group_11 flex-col"></view>
      </view>
      <view class="group_12 flex-row">
        <view class="image-text_11 flex-col justify-between">
          <image
            class="label_6"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/psm5n3m7gxrsiehjmcxt9hsa75u9y8quwie36b3d6ec-62fb-488b-99f9-9da3d6b6bc41"
          />
          <text class="text-group_11">首页</text>
        </view>
        <view class="image-text_12 flex-col justify-between">
          <image
            class="label_7"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps9rn1vp332wahn260403twrppv4ggj4ob7a91e101-bc6e-40a6-b6f9-2a1f0c576275"
          />
          <text class="text-group_12">家用空调</text>
        </view>
        <view class="image-text_13 flex-col justify-between">
          <image
            class="label_8"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/psl7gos2feoz9d75ysxq24vpudv61lh0coa7dbe15d-cda9-4ca4-b720-6c8b9769077c"
          />
          <text class="text-group_13">商用空调</text>
        </view>
        <view class="image-text_14 flex-col justify-between">
          <image
            class="label_9"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/psvofjfn3epq360am3umvxhw5zwwzx82xk9feb5edf-2935-4493-ba00-5d2d7c6c8ba4"
          />
          <text class="text-group_14">二手门店</text>
        </view>
        <view class="image-text_15 flex-col justify-between">
          <image
            class="label_10"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/psuf6qv9ncvq0hh5r4yx8iwgx1j90uio8b9e38e19e3-f255-46b2-95ad-7e2ada113b10"
          />
          <text class="text-group_15">我的</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      loopData0: [
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/ps08pqy44udz9i7x1rhsmjfkwmav9x2ptv37b4e2bd-bdfd-4018-a4db-0af7e9ffb3e1',
          lanhutext0: '大金',
          lanhufontColor0: 'rgba(102,102,102,1)',
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/psei7wpx4i2yobnlvj4l165jeqznm6smbf0f2dd48-b133-4590-880d-cb1ebe3d0088',
          lanhutext0: '格力',
          lanhufontColor0: 'rgba(51,51,51,1)',
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/psw6reqahup1rbgnqoe851i8jrlxpkmape0d89f3ff-a8dc-4b5b-a237-7ec13cf6de70',
          lanhutext0: '美的',
          lanhufontColor0: 'rgba(51,51,51,1)',
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/ps6wm573ihl3c37cmbgaxx7w3wa6felwgtr596d9ce2-2d3c-4858-89d9-bf171d13620b',
          lanhutext0: '奥克斯',
          lanhufontColor0: 'rgba(51,51,51,1)',
        },
        {
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/psqa9fa6bpnwg5f3izsc8qpcj1jz8v7lxd81ea8772-14fb-4aa8-aa2c-7ef85be67b63',
          lanhutext0: '海尔',
          lanhufontColor0: 'rgba(51,51,51,1)',
        },
      ],
      constants: {},
    };
  },
  methods: {},
};
</script>
<style>
@import './common.css';
@import './index.rpx.css';
</style>

<style>
	.page {
	  background-color: rgba(255, 255, 255, 1);
	  position: relative;
	  width: 750px;
	  height: 2760px;
	  overflow: hidden;
	  .group_1 {
	    width: 750px;
	    height: 2745px;
	    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/psmo695p76bfssrj9pl5w9qj0uyomqbywxac8cb1c426-ce63-48d0-8e43-58db29b4a380)
	      0px 0px no-repeat;
	    background-size: 750px 2848px;
	    margin-top: 15px;
	    .group_2 {
	      width: 750px;
	      height: 244px;
	      background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps59drfwoeaop2rwmujyrphvuaeqgb0axqfdf6667e-c63f-4b00-961c-724335a2ad65)
	        0px -15px no-repeat;
	      background-size: 750px 260px;
	      margin-top: -15px;
	      .image_1 {
	        width: 727px;
	        height: 20px;
	        margin: 15px 0 0 12px;
	      }
	      .block_1 {
	        width: 706px;
	        height: 64px;
	        margin: 23px 0 0 31px;
	        .label_1 {
	          width: 42px;
	          height: 42px;
	          margin-top: 7px;
	        }
	        .text_1 {
	          width: 146px;
	          height: 29px;
	          overflow-wrap: break-word;
	          color: rgba(255, 255, 255, 1);
	          font-size: 30px;
	          font-family: PingFang-SC-Bold;
	          font-weight: 700;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 30px;
	          margin: 15px 0 0 12px;
	        }
	        .group_3 {
	          background-color: rgba(0, 0, 0, 0.18);
	          border-radius: 32px;
	          width: 174px;
	          height: 64px;
	          border: 1px solid rgba(210, 210, 210, 0.18);
	          margin-left: 332px;
	          .image_2 {
	            width: 68px;
	            height: 42px;
	            margin: 11px 0 0 28px;
	          }
	          .group_4 {
	            border-radius: 50%;
	            height: 32px;
	            border: 3px solid rgba(255, 254, 255, 1);
	            width: 32px;
	            margin: 17px 28px 0 0;
	            .box_1 {
	              background-color: rgba(255, 254, 255, 1);
	              border-radius: 50%;
	              width: 14px;
	              height: 14px;
	              margin: 9px 0 0 9px;
	            }
	          }
	        }
	      }
	      .block_2 {
	        width: 693px;
	        height: 56px;
	        margin: 27px 0 39px 28px;
	        .image-text_1 {
	          width: 70px;
	          height: 23px;
	          margin-top: 18px;
	          .text-group_1 {
	            width: 45px;
	            height: 23px;
	            overflow-wrap: break-word;
	            color: rgba(255, 255, 255, 1);
	            font-size: 24px;
	            font-family: PingFang-SC-Regular;
	            font-weight: NaN;
	            text-align: left;
	            white-space: nowrap;
	            line-height: 24px;
	          }
	          .thumbnail_1 {
	            width: 18px;
	            height: 10px;
	            margin-top: 10px;
	          }
	        }
	        .text-wrapper_1 {
	          background-color: rgba(255, 255, 255, 1);
	          border-radius: 28px;
	          height: 56px;
	          border: 1px solid rgba(191, 191, 191, 1);
	          margin-left: 27px;
	          width: 520px;
	          .text_2 {
	            width: 195px;
	            height: 22px;
	            overflow-wrap: break-word;
	            color: rgba(153, 153, 153, 1);
	            font-size: 22px;
	            font-family: PingFang-SC-Regular;
	            font-weight: NaN;
	            text-align: left;
	            white-space: nowrap;
	            line-height: 22px;
	            margin: 20px 0 0 22px;
	          }
	        }
	        .image-wrapper_1 {
	          background-color: rgba(255, 255, 255, 1);
	          border-radius: 50%;
	          height: 48px;
	          border: 1px solid rgba(191, 191, 191, 1);
	          width: 48px;
	          margin: 4px 0 0 28px;
	          .label_2 {
	            width: 27px;
	            height: 31px;
	            margin: 9px 0 0 11px;
	          }
	        }
	      }
	    }
	    .group_5 {
	      width: 750px;
	      height: 413px;
	      .block_3 {
	        width: 694px;
	        height: 133px;
	        margin: 29px 0 0 27px;
	        .section_1 {
	          background-color: rgba(255, 255, 255, 1);
	          border-radius: 10px;
	          width: 332px;
	          height: 133px;
	          border: 2px solid rgba(255, 254, 255, 1);
	          .image-text_2 {
	            width: 275px;
	            height: 80px;
	            margin: 27px 0 0 16px;
	            .image-wrapper_2 {
	              height: 80px;
	              background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/ps7h7jzhhtm8jb4llh1yegvcjvxbrswrx85d5751f1-88c2-4c20-bf8f-6ff75a5375a7)
	                100% no-repeat;
	              background-size: 100% 100%;
	              width: 80px;
	              .label_3 {
	                width: 46px;
	                height: 36px;
	                margin: 22px 0 0 16px;
	              }
	            }
	            .text-group_2 {
	              width: 189px;
	              height: 66px;
	              margin-top: 8px;
	              .text_3 {
	                width: 157px;
	                height: 31px;
	                overflow-wrap: break-word;
	                color: rgba(51, 51, 51, 1);
	                font-size: 32px;
	                font-family: PingFang-SC-Medium;
	                font-weight: 500;
	                text-align: left;
	                white-space: nowrap;
	                line-height: 32px;
	                margin-left: 7px;
	              }
	              .text_4 {
	                width: 189px;
	                height: 22px;
	                overflow-wrap: break-word;
	                color: rgba(153, 153, 153, 1);
	                font-size: 22px;
	                font-family: PingFang-SC-Regular;
	                font-weight: NaN;
	                text-align: left;
	                white-space: nowrap;
	                line-height: 22px;
	                margin-top: 13px;
	              }
	            }
	          }
	        }
	        .section_2 {
	          background-color: rgba(255, 255, 255, 1);
	          border-radius: 10px;
	          width: 332px;
	          height: 133px;
	          border: 2px solid rgba(255, 254, 255, 1);
	          .image-text_3 {
	            width: 275px;
	            height: 80px;
	            margin: 27px 0 0 30px;
	            .image-wrapper_3 {
	              height: 80px;
	              background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/pstzh93nwbnl5cb7gwrw4bmlegwk475rbb98159a4-30ef-482c-9b50-b8c05d79ac62)
	                100% no-repeat;
	              background-size: 100% 100%;
	              width: 80px;
	              .label_4 {
	                width: 37px;
	                height: 37px;
	                margin: 20px 0 0 22px;
	              }
	            }
	            .text-group_3 {
	              width: 189px;
	              height: 66px;
	              margin-top: 8px;
	              .text_5 {
	                width: 157px;
	                height: 31px;
	                overflow-wrap: break-word;
	                color: rgba(51, 51, 51, 1);
	                font-size: 32px;
	                font-family: PingFang-SC-Medium;
	                font-weight: 500;
	                text-align: left;
	                white-space: nowrap;
	                line-height: 32px;
	                margin-left: 7px;
	              }
	              .text_6 {
	                width: 189px;
	                height: 22px;
	                overflow-wrap: break-word;
	                color: rgba(153, 153, 153, 1);
	                font-size: 22px;
	                font-family: PingFang-SC-Regular;
	                font-weight: NaN;
	                text-align: left;
	                white-space: nowrap;
	                line-height: 22px;
	                margin-top: 13px;
	              }
	            }
	          }
	        }
	      }
	      .block_4 {
	        background-color: rgba(255, 255, 255, 1);
	        border-radius: 10px;
	        width: 692px;
	        height: 209px;
	        border: 2px solid rgba(255, 254, 255, 1);
	        margin: 21px 0 21px 27px;
	        .list_1 {
	          width: 671px;
	          height: 69px;
	          justify-content: space-between;
	          margin: 7px 0 0 16px;
	          .image-text_4 {
	            width: 110px;
	            height: 64px;
	            margin: 5px 30px 0 0;
	            .image_3 {
	              width: 110px;
	              height: 40px;
	            }
	            .text-group_4 {
	              width: 70px;
	              height: 23px;
	              overflow-wrap: break-word;
	              font-size: 24px;
	              font-family: PingFang-SC-Regular;
	              font-weight: NaN;
	              text-align: left;
	              white-space: nowrap;
	              line-height: 24px;
	              margin: 1px 0 0 31px;
	            }
	          }
	        }
	        .box_2 {
	          width: 647px;
	          height: 70px;
	          margin: 26px 0 37px 16px;
	          .image-text_5 {
	            width: 110px;
	            height: 69px;
	            margin-top: 1px;
	            .image_4 {
	              width: 110px;
	              height: 40px;
	            }
	            .text-group_5 {
	              width: 46px;
	              height: 23px;
	              overflow-wrap: break-word;
	              color: rgba(51, 51, 51, 1);
	              font-size: 24px;
	              font-family: PingFang-SC-Regular;
	              font-weight: NaN;
	              text-align: left;
	              white-space: nowrap;
	              line-height: 24px;
	              margin: 6px 0 0 31px;
	            }
	          }
	          .image-text_6 {
	            width: 108px;
	            height: 68px;
	            margin: 2px 0 0 37px;
	            .image_5 {
	              width: 108px;
	              height: 37px;
	            }
	            .text-group_6 {
	              width: 47px;
	              height: 23px;
	              overflow-wrap: break-word;
	              color: rgba(51, 51, 51, 1);
	              font-size: 24px;
	              font-family: PingFang-SC-Regular;
	              font-weight: NaN;
	              text-align: left;
	              white-space: nowrap;
	              line-height: 24px;
	              margin: 8px 0 0 23px;
	            }
	          }
	          .image-text_7 {
	            width: 110px;
	            height: 62px;
	            margin: 8px 0 0 27px;
	            .image_6 {
	              width: 110px;
	              height: 21px;
	            }
	            .text-group_7 {
	              width: 45px;
	              height: 23px;
	              overflow-wrap: break-word;
	              color: rgba(51, 51, 51, 1);
	              font-size: 24px;
	              font-family: PingFang-SC-Regular;
	              font-weight: NaN;
	              text-align: left;
	              white-space: nowrap;
	              line-height: 24px;
	              margin: 18px 0 0 29px;
	            }
	          }
	          .image-text_8 {
	            width: 110px;
	            height: 70px;
	            margin-left: 25px;
	            .image_7 {
	              width: 110px;
	              height: 40px;
	            }
	            .text-group_8 {
	              width: 70px;
	              height: 23px;
	              overflow-wrap: break-word;
	              color: rgba(51, 51, 51, 1);
	              font-size: 24px;
	              font-family: PingFang-SC-Regular;
	              font-weight: NaN;
	              text-align: left;
	              white-space: nowrap;
	              line-height: 24px;
	              margin: 7px 0 0 26px;
	            }
	          }
	          .image-text_9 {
	            width: 82px;
	            height: 30px;
	            margin: 31px 0 0 38px;
	            .label_5 {
	              width: 30px;
	              height: 30px;
	            }
	            .text-group_9 {
	              width: 45px;
	              height: 23px;
	              overflow-wrap: break-word;
	              color: rgba(51, 51, 51, 1);
	              font-size: 24px;
	              font-family: PingFang-SC-Regular;
	              font-weight: NaN;
	              text-align: left;
	              white-space: nowrap;
	              line-height: 24px;
	              margin-top: 3px;
	            }
	          }
	        }
	      }
	    }
	    .group_6 {
	      background-color: rgba(255, 255, 255, 1);
	      border-radius: 10px;
	      height: 393px;
	      border: 2px solid rgba(255, 254, 255, 1);
	      width: 692px;
	      margin: -1px 0 0 27px;
	      .section_3 {
	        width: 653px;
	        height: 33px;
	        margin: 22px 0 0 19px;
	        .text_7 {
	          width: 125px;
	          height: 31px;
	          overflow-wrap: break-word;
	          color: rgba(51, 51, 51, 1);
	          font-size: 32px;
	          font-family: PingFang-SC-Medium;
	          font-weight: 500;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 32px;
	          margin-top: 2px;
	        }
	        .image-text_10 {
	          width: 105px;
	          height: 21px;
	          .text-group_10 {
	            width: 87px;
	            height: 21px;
	            overflow-wrap: break-word;
	            color: rgba(153, 153, 153, 1);
	            font-size: 22px;
	            font-family: PingFang-SC-Regular;
	            font-weight: NaN;
	            text-align: left;
	            white-space: nowrap;
	            line-height: 48px;
	          }
	          .thumbnail_2 {
	            width: 10px;
	            height: 16px;
	            margin-top: 2px;
	          }
	        }
	      }
	      .section_4 {
	        width: 497px;
	        height: 263px;
	        margin: 38px 0 37px 34px;
	        .section_5 {
	          width: 7px;
	          height: 249px;
	          margin-top: 7px;
	          .section_6 {
	            background-color: rgba(230, 60, 49, 1);
	            border-radius: 50%;
	            width: 7px;
	            height: 7px;
	          }
	          .section_7 {
	            background-color: rgba(230, 60, 49, 1);
	            border-radius: 50%;
	            width: 7px;
	            height: 7px;
	            margin-top: 41px;
	          }
	          .section_8 {
	            background-color: rgba(230, 60, 49, 1);
	            border-radius: 50%;
	            width: 7px;
	            height: 7px;
	            margin-top: 43px;
	          }
	          .section_9 {
	            background-color: rgba(230, 60, 49, 1);
	            border-radius: 50%;
	            width: 7px;
	            height: 7px;
	            margin-top: 43px;
	          }
	          .section_10 {
	            background-color: rgba(230, 60, 49, 1);
	            border-radius: 50%;
	            width: 7px;
	            height: 7px;
	            margin-top: 36px;
	          }
	          .section_11 {
	            background-color: rgba(230, 60, 49, 1);
	            border-radius: 50%;
	            width: 7px;
	            height: 7px;
	            margin-top: 44px;
	          }
	        }
	        .paragraph_1 {
	          width: 479px;
	          height: 263px;
	          overflow-wrap: break-word;
	          color: rgba(51, 51, 51, 1);
	          font-size: 24px;
	          font-family: PingFang-SC-Regular;
	          font-weight: NaN;
	          text-align: left;
	          line-height: 48px;
	        }
	      }
	    }
	    .group_7 {
	      background-color: rgba(255, 255, 255, 1);
	      border-radius: 10px;
	      position: relative;
	      width: 694px;
	      height: 1564px;
	      border: 2px solid rgba(255, 254, 255, 1);
	      margin: 19px 0 0 27px;
	      .text-wrapper_2 {
	        width: 161px;
	        height: 31px;
	        margin: 27px 0 0 36px;
	        .text_8 {
	          width: 62px;
	          height: 31px;
	          overflow-wrap: break-word;
	          color: rgba(51, 51, 51, 1);
	          font-size: 32px;
	          font-family: PingFang-SC-Medium;
	          font-weight: 500;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 32px;
	        }
	        .text_9 {
	          width: 48px;
	          height: 23px;
	          overflow-wrap: break-word;
	          color: rgba(102, 102, 102, 1);
	          font-size: 24px;
	          font-family: PingFang-SC-Regular;
	          font-weight: NaN;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 24px;
	          margin-top: 7px;
	        }
	      }
	      .image_8 {
	        width: 665px;
	        height: 1px;
	        margin: 12px 0 0 14px;
	      }
	      .group_8 {
	        width: 659px;
	        height: 320px;
	        margin: 28px 0 0 16px;
	        .box_3 {
	          background-color: rgba(255, 255, 255, 1);
	          border-radius: 4px;
	          width: 320px;
	          height: 320px;
	        }
	        .box_4 {
	          background-color: rgba(255, 255, 255, 1);
	          border-radius: 4px;
	          width: 320px;
	          height: 320px;
	        }
	      }
	      .text-wrapper_3 {
	        width: 632px;
	        height: 60px;
	        margin: 26px 0 0 25px;
	        .paragraph_2 {
	          width: 286px;
	          height: 60px;
	          overflow-wrap: break-word;
	          color: rgba(51, 51, 51, 1);
	          font-size: 24px;
	          font-family: PingFang-SC-Regular;
	          font-weight: NaN;
	          text-align: left;
	          line-height: 36px;
	        }
	        .paragraph_3 {
	          width: 286px;
	          height: 60px;
	          overflow-wrap: break-word;
	          color: rgba(51, 51, 51, 1);
	          font-size: 24px;
	          font-family: PingFang-SC-Regular;
	          font-weight: NaN;
	          text-align: left;
	          line-height: 36px;
	        }
	      }
	      .text-wrapper_4 {
	        width: 648px;
	        height: 24px;
	        margin: 21px 0 0 29px;
	        .text_10 {
	          width: 139px;
	          height: 23px;
	          overflow-wrap: break-word;
	          color: rgba(230, 60, 49, 1);
	          font-size: 30px;
	          font-family: PingFang-SC-Medium;
	          font-weight: 500;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 36px;
	        }
	        .text_11 {
	          width: 42px;
	          height: 21px;
	          overflow-wrap: break-word;
	          color: rgba(153, 153, 153, 1);
	          font-size: 22px;
	          font-family: PingFang-SC-Regular;
	          font-weight: NaN;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 36px;
	          margin: 3px 0 0 100px;
	        }
	        .text_12 {
	          width: 139px;
	          height: 23px;
	          overflow-wrap: break-word;
	          color: rgba(230, 60, 49, 1);
	          font-size: 30px;
	          font-family: PingFang-SC-Medium;
	          font-weight: 500;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 36px;
	          margin-left: 63px;
	        }
	        .text_13 {
	          width: 42px;
	          height: 21px;
	          overflow-wrap: break-word;
	          color: rgba(153, 153, 153, 1);
	          font-size: 22px;
	          font-family: PingFang-SC-Regular;
	          font-weight: NaN;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 36px;
	          margin: 3px 0 0 123px;
	        }
	      }
	      .group_9 {
	        width: 659px;
	        height: 320px;
	        margin: 37px 0 0 16px;
	        .box_5 {
	          background-color: rgba(255, 255, 255, 1);
	          border-radius: 4px;
	          width: 320px;
	          height: 320px;
	        }
	        .box_6 {
	          background-color: rgba(255, 255, 255, 1);
	          border-radius: 4px;
	          width: 320px;
	          height: 320px;
	        }
	      }
	      .text-wrapper_5 {
	        width: 629px;
	        height: 60px;
	        margin: 26px 0 0 25px;
	        .paragraph_4 {
	          width: 286px;
	          height: 60px;
	          overflow-wrap: break-word;
	          color: rgba(51, 51, 51, 1);
	          font-size: 24px;
	          font-family: PingFang-SC-Regular;
	          font-weight: NaN;
	          text-align: left;
	          line-height: 36px;
	        }
	        .paragraph_5 {
	          width: 286px;
	          height: 60px;
	          overflow-wrap: break-word;
	          color: rgba(51, 51, 51, 1);
	          font-size: 24px;
	          font-family: PingFang-SC-Regular;
	          font-weight: NaN;
	          text-align: left;
	          line-height: 36px;
	        }
	      }
	      .text-wrapper_6 {
	        width: 648px;
	        height: 29px;
	        margin: 18px 0 0 29px;
	        .text_14 {
	          width: 139px;
	          height: 23px;
	          overflow-wrap: break-word;
	          color: rgba(230, 60, 49, 1);
	          font-size: 30px;
	          font-family: PingFang-SC-Medium;
	          font-weight: 500;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 36px;
	          margin-top: 3px;
	        }
	        .text_15 {
	          width: 42px;
	          height: 21px;
	          overflow-wrap: break-word;
	          color: rgba(153, 153, 153, 1);
	          font-size: 22px;
	          font-family: PingFang-SC-Regular;
	          font-weight: NaN;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 36px;
	          margin: 6px 0 0 100px;
	        }
	        .text_16 {
	          width: 58px;
	          height: 29px;
	          overflow-wrap: break-word;
	          color: rgba(230, 60, 49, 1);
	          font-size: 30px;
	          font-family: PingFang-SC-Medium;
	          font-weight: 500;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 36px;
	          margin-left: 57px;
	        }
	        .text_17 {
	          width: 42px;
	          height: 21px;
	          overflow-wrap: break-word;
	          color: rgba(153, 153, 153, 1);
	          font-size: 22px;
	          font-family: PingFang-SC-Regular;
	          font-weight: NaN;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 36px;
	          margin: 6px 0 0 210px;
	        }
	      }
	      .group_10 {
	        width: 659px;
	        height: 320px;
	        margin: 30px 0 0 16px;
	        .box_7 {
	          background-color: rgba(255, 255, 255, 1);
	          border-radius: 4px;
	          width: 320px;
	          height: 320px;
	        }
	        .box_8 {
	          background-color: rgba(255, 255, 255, 1);
	          border-radius: 4px;
	          width: 320px;
	          height: 320px;
	        }
	      }
	      .text-wrapper_7 {
	        width: 634px;
	        height: 62px;
	        margin: 25px 0 0 25px;
	        .paragraph_6 {
	          width: 286px;
	          height: 60px;
	          overflow-wrap: break-word;
	          color: rgba(51, 51, 51, 1);
	          font-size: 24px;
	          font-family: PingFang-SC-Regular;
	          font-weight: NaN;
	          text-align: left;
	          line-height: 36px;
	          margin-top: 1px;
	        }
	        .paragraph_7 {
	          width: 288px;
	          height: 62px;
	          overflow-wrap: break-word;
	          color: rgba(51, 51, 51, 1);
	          font-size: 24px;
	          font-family: SourceHanSansCN-Regular;
	          font-weight: NaN;
	          text-align: left;
	          line-height: 36px;
	        }
	      }
	      .text-wrapper_8 {
	        width: 648px;
	        height: 24px;
	        margin: 20px 0 43px 29px;
	        .text_18 {
	          width: 139px;
	          height: 23px;
	          overflow-wrap: break-word;
	          color: rgba(230, 60, 49, 1);
	          font-size: 30px;
	          font-family: PingFang-SC-Medium;
	          font-weight: 500;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 36px;
	        }
	        .text_19 {
	          width: 42px;
	          height: 21px;
	          overflow-wrap: break-word;
	          color: rgba(153, 153, 153, 1);
	          font-size: 22px;
	          font-family: PingFang-SC-Regular;
	          font-weight: NaN;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 36px;
	          margin: 3px 0 0 100px;
	        }
	        .text_20 {
	          width: 139px;
	          height: 23px;
	          overflow-wrap: break-word;
	          color: rgba(230, 60, 49, 1);
	          font-size: 30px;
	          font-family: PingFang-SC-Medium;
	          font-weight: 500;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 36px;
	          margin-left: 63px;
	        }
	        .text_21 {
	          width: 42px;
	          height: 21px;
	          overflow-wrap: break-word;
	          color: rgba(153, 153, 153, 1);
	          font-size: 22px;
	          font-family: SourceHanSansCN-Regular;
	          font-weight: NaN;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 36px;
	          margin: 2px 0 0 123px;
	        }
	      }
	      .group_11 {
	        background-color: rgba(230, 60, 49, 1);
	        border-radius: 2px;
	        position: absolute;
	        left: 32px;
	        top: 69px;
	        width: 64px;
	        height: 4px;
	      }
	    }
	    .group_12 {
	      background-color: rgba(255, 255, 255, 1);
	      width: 750px;
	      height: 98px;
	      margin: 25px 0 5px 0;
	      .image-text_11 {
	        width: 46px;
	        height: 72px;
	        margin: 19px 0 0 36px;
	        .label_6 {
	          width: 42px;
	          height: 40px;
	          margin-left: 1px;
	        }
	        .text-group_11 {
	          width: 46px;
	          height: 23px;
	          overflow-wrap: break-word;
	          color: rgba(230, 60, 49, 1);
	          font-size: 24px;
	          font-family: PingFang-SC-Regular;
	          font-weight: NaN;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 36px;
	          margin-top: 9px;
	        }
	      }
	      .image-text_12 {
	        width: 93px;
	        height: 68px;
	        margin: 23px 0 0 85px;
	        .label_7 {
	          width: 48px;
	          height: 38px;
	          margin-left: 19px;
	        }
	        .text-group_12 {
	          width: 93px;
	          height: 23px;
	          overflow-wrap: break-word;
	          color: rgba(51, 51, 51, 1);
	          font-size: 24px;
	          font-family: PingFang-SC-Regular;
	          font-weight: NaN;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 36px;
	          margin-top: 7px;
	        }
	      }
	      .image-text_13 {
	        width: 93px;
	        height: 75px;
	        margin: 16px 0 0 63px;
	        .label_8 {
	          width: 42px;
	          height: 42px;
	          margin-left: 23px;
	        }
	        .text-group_13 {
	          width: 93px;
	          height: 23px;
	          overflow-wrap: break-word;
	          color: rgba(51, 51, 51, 1);
	          font-size: 24px;
	          font-family: PingFang-SC-Regular;
	          font-weight: NaN;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 36px;
	          margin-top: 10px;
	        }
	      }
	      .image-text_14 {
	        width: 94px;
	        height: 75px;
	        margin: 16px 0 0 62px;
	        .label_9 {
	          width: 42px;
	          height: 40px;
	          margin-left: 29px;
	        }
	        .text-group_14 {
	          width: 94px;
	          height: 23px;
	          overflow-wrap: break-word;
	          color: rgba(51, 51, 51, 1);
	          font-size: 24px;
	          font-family: PingFang-SC-Regular;
	          font-weight: NaN;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 36px;
	          margin-top: 12px;
	        }
	      }
	      .image-text_15 {
	        width: 45px;
	        height: 73px;
	        margin: 18px 47px 0 86px;
	        .label_10 {
	          width: 36px;
	          height: 40px;
	          margin-left: 6px;
	        }
	        .text-group_15 {
	          width: 45px;
	          height: 23px;
	          overflow-wrap: break-word;
	          color: rgba(51, 51, 51, 1);
	          font-size: 24px;
	          font-family: PingFang-SC-Regular;
	          font-weight: NaN;
	          text-align: left;
	          white-space: nowrap;
	          line-height: 36px;
	          margin-top: 10px;
	        }
	      }
	    }
	  }
	}

</style>
