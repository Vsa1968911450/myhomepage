<template>
  <div class="analysis">
    <basic-container style="background:#F0F2F5">
      <el-row :gutter="10">
        <el-col
          style="background:white"
          :xs="24"
          :sm="12"
          :md="12"
          :lg="6"
          :xl="6">
          <el-card
            style="height:100%;width:100%"
            class="box-card elcard">
            <div>
              <p class="titlebox">总设备数
              </p>
              <p class="number">{{ mtrNum }}</p>
              <div style="width:100%;height:130px">
                <!-- <p style="padding-top:30px;color:black"
                   class="titlebox">周同比：</p>
                <p style="color:black;padding-top:20px;"
                   class="titlebox">日环比</p> -->
              </div>
              <div class="bordertopf">
                <p class="titlebottom">日均用气量{{ this.mtrDayAmount }}m³</p>
              </div>
            </div>
          </el-card>

        </el-col>
        <el-col
          :xs="24"
          :sm="12"
          :md="12"
          :lg="6"
          :xl="6">
          <el-card
            style="height:100%;width:100%"
            class="box-card elcard">
            <div>
              <p class="titlebox">正常设备数
              </p>
              <p class="number">{{ this.mtrNormalNum }}</p>
              <div
                class="chartContent"
                style="margin-top:-20px;margin-left:-10%"
                id="chart"></div>
              <div class="bordertop">
                <p class="titlebottom">昨日正常设备数{{ this.mtrNormalNumTwo }}</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col
          :xs="24"
          :sm="12"
          :md="12"
          :lg="6"
          :xl="6">
          <el-card
            style="height:100%;width:100%"
            class="box-card elcard">
            <div>
              <p class="titlebox">异常设备数
              </p>
              <p class="number">{{ this.mtrAbnormalNum }}</p>
              <div
                class="chartContent"
                style="margin-top:-20px;margin-left:-10%"
                id="chartbuzc"></div>
              <div class="bordertop">
                <p class="titlebottom">昨日异常设备数{{ this.mtrAbnormalNumTwo }}</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col
          :xs="24"
          :sm="12"
          :md="12"
          :lg="6"
          :xl="6">
          <el-card
            style="height:100%;width:100%"
            class="box-card elcard">
            <div>
              <p class="titlebox">充值笔数
              </p>
              <p class="number">{{ this.mtrRechargeNum }}</p>
              <div
                class="chartContent"
                style="margin-top:-20px;margin-left:-10%"
                id="chartchongzhi"></div>
              <div class="bordertop">
                <p class="titlebottom">充值总额(元){{ this.mtrRechargeAmount }}</p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row style="margin-top:20px;background:white">
        <el-col :span="24">
          <el-tabs
            v-model="activeName"
            @tab-click="handleClick">
            <el-tab-pane
              label="用气量"
              name="first">
              <div
                class="chartContentmiddle"
                id="chartyongqi"></div>
            </el-tab-pane>
            <el-tab-pane
              label="异常情况统计"
              name="second">
              <div
                class="chartContentmiddle"
                id="chartyichang"></div>
            </el-tab-pane>
            <el-tab-pane
              label="上传成功率"
              name="third">
              <div
                class="chartContentmiddle"
                id="chartsus"></div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
      <el-row
        style="margin-top:20px"
        :gutter="10">
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="12"
          :xl="12">
          <div class="grid-content bg-purple">
            <el-card
              style="height:460px;width:100%"
              class="box-card elcard">
              <div class="gutter">
                <p class="usernumber">用户数</p>
                <el-row>
                  <el-col
                    :xs="24"
                    :sm="12"
                    :md="12"
                    :lg="12"
                    :xl="12">
                    <p class="titlebox">用户数</p>
                    <p class="number">7278</p>
                  </el-col>
                  <el-col
                    :xs="24"
                    :sm="12"
                    :md="12"
                    :lg="12"
                    :xl="12">
                    <p class="titlebox">人均气费金额</p>
                    <p class="number">2.18</p>
                  </el-col>
                </el-row>
              </div>
              <el-table
                :data="tableData"
                style="width: 100%"
                border
                :default-sort="{prop: 'address', order: 'descending'}">
                <el-table-column
                  prop="date"
                  label="用户类型">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="用气量">
                </el-table-column>
                <el-table-column
                  prop="address"
                  sortable
                  label="用户数">
                </el-table-column>
              </el-table>
            </el-card>
          </div>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="12"
          :xl="12">
          <div class="grid-content bg-purple-light">
            <el-card
              style="height:460px;width:100%"
              class="box-card elcard">
              <div class="gutter">
                <p class="usernumber">各种用户用量占比</p>
                <div
                  class="chartContentyuan"
                  style="width:100%"
                  id="chartnumberuser"></div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </basic-container>
  </div>
</template>

<script>
// import { getImpMeterStatistics } from '@/api/meterMonitor/analysis'
export default {
  data () {
    return {
      mtrNum: '1212万',
      mtrNormalNum: '454',
      mtrAbnormalNum: '1212',
      mtrDayAmount: '1009',
      mtrNormalNumTwo: '111',
      mtrRechargeAmount: '222',
      mtrAbnormalNumTwo: '333',
      mtrRechargeNum: '444',
      activeName: 'first',
      listGas: [],
      listAbnormals: [],
      listAbnormal: [],
      listNormal: [],
      listRecharge: [],
      rateList: [],
      tableData: [
        {
          date: '用户',
          name: '2165',
          address: '7313'
        },
        {
          date: '工商',
          name: '0',
          address: '0'
        },
        {
          date: '团缴',
          name: '0',
          address: '0'
        },
        {
          date: '公用',
          name: '0',
          address: '0'
        },
        {
          date: '其他',
          name: '0',
          address: '0'
        }
      ]
    }
  },
  mounted () {
          this.$nextTick(() => {
          this.drawequipment()
          this.drawequipmentbuzc()
          this.drawequipmentmyChartchongzhi()
          this.chartyongqi()
        })
    // this.getImpMeterStatistics()
  },
  methods: {
    // async getImpMeterStatistics () {
    //   const res = await getImpMeterStatistics()
    //   console.log(res)
    //   if (res) {
    //     this.mtrNum = res.data.list.mtrNum
    //     this.mtrNormalNum = res.data.list.mtrNormalNum
    //     this.mtrAbnormalNum = res.data.list.mtrAbnormalNum
    //     this.mtrRechargeNum = res.data.list.mtrRechargeNum
    //     this.mtrDayAmount = res.data.list.mtrDayAmount
    //     this.mtrNormalNumTwo = res.data.list.mtrNormalNumTwo
    //     this.mtrAbnormalNumTwo = res.data.list.mtrAbnormalNumTwo
    //     this.mtrRechargeAmount = res.data.list.mtrRechargeAmount
    //     this.listAbnormal = res.data.listAbnormal.reverse()
    //     this.listNormal = res.data.listNormal.reverse()
    //     this.listRecharge = res.data.listRecharge.reverse()
    //     this.listAbnormals = res.data.listAbnormals.reverse()
    //     this.listGas = res.data.listGas.reverse()
    //     this.rateList = res.data.rateList.reverse()
    //     console.log(this.listAbnormal)
    //     this.$nextTick(() => {
    //       this.drawequipment()
    //       this.drawequipmentbuzc()
    //       this.drawequipmentmyChartchongzhi()
    //       this.chartyongqi()
    //     })
    //   }
    // },
    handleClick (tab, event) {
      if (this.activeName === 'first') {
        this.$nextTick(() => {
          this.chartyongqi()
        })
      }
      if (this.activeName === 'second') {
        this.$nextTick(() => {
          this.chartchartyichang()
        })
      }
      if (this.activeName === 'third') {
        this.$nextTick(() => {
          this.chartsus()
        })
      }
      console.log(this.activeName)
    },
    // 正常设备数
    drawequipment () {
      const myChart1 = this.$echarts.init(document.getElementById('chart'))
      const data = []
      const date = []
    //   this.$_.forEach(this.listNormal, (val, index) => {
    //     date.push(val.optTime)
    //     data.push(val.val)
    //   })
      const option = {
        visualMap: [
          {
            show: false,
            type: 'continuous',
            seriesIndex: 0
          }
        ],
        xAxis: {
          type: 'category',
          data: date,
          show: false,
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          show: false
        },
        tooltip: {
          trigger: 'axis',
          formatter: '日期:{b}<br>正常设备数:{c}'
        },
        series: [
          {
            data: data,
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: '#3AA1FF',
                width: 3
              }
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#3AA1FF'
                  },
                  {
                    offset: 1,
                    color: '#D1E9FF'
                  }
                ]),
                width: 3
              }
            }
          }
        ]
      }
      myChart1.setOption(option)
      window.addEventListener('resize', () => {
        myChart1.resize()
      })
    },
    // 异常设备
    drawequipmentbuzc () {
      const myChartbuzc = this.$echarts.init(
        document.getElementById('chartbuzc')
      )
      const data = []
      const date = []
    //   this.$_.forEach(this.listAbnormal, (val, index) => {
    //     date.push(val.optTime)
    //     data.push(val.val)
    //   })
      const option = {
        visualMap: [
          {
            show: false,
            type: 'continuous',
            seriesIndex: 0
          }
        ],
        xAxis: {
          type: 'category',
          data: date,
          show: false,
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          show: false
        },
        tooltip: {
          trigger: 'axis',
          formatter: '日期:{b}<br>异常设备数:{c}'
        },
        series: [
          {
            data: data,
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: '#3AA1FF',
                width: 3
              }
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#3AA1FF'
                  },
                  {
                    offset: 1,
                    color: '#D1E9FF'
                  }
                ]),
                width: 3
              }
            }
          }
        ]
      }
      myChartbuzc.setOption(option)
      window.addEventListener('resize', () => {
        myChartbuzc.resize()
      })
    },
    // 充值笔数
    drawequipmentmyChartchongzhi () {
      const myChartchongzhi = this.$echarts.init(
        document.getElementById('chartchongzhi')
      )
      const data = []
      const date = []
      this.$_.forEach(this.listRecharge, (val, index) => {
        date.push(val.optTime)
        data.push(val.val)
      })
      console.log(data)
      console.log(date)
      const option = {
        visualMap: [
          {
            show: false,
            type: 'continuous',
            seriesIndex: 0
          }
        ],
        xAxis: {
          type: 'category',
          data: date,
          show: false,
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          show: false
        },
        tooltip: {
          trigger: 'axis',
          formatter: '日期:{b}<br>充值笔数:{c}'
        },
        series: [
          {
            data: data,
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: '#3AA1FF',
                width: 3
              }
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#3AA1FF'
                  },
                  {
                    offset: 1,
                    color: '#D1E9FF'
                  }
                ]),
                width: 3
              }
            }
          }
        ]
      }
      myChartchongzhi.setOption(option)
      window.onresize = function () {
        myChartchongzhi.resize()
      }
    },
    // 用气量
    chartyongqi () {
      const myChartone = this.$echarts.init(
        document.getElementById('chartyongqi')
      )
      const data = []
      const date = []
      this.$_.forEach(this.listGas, (val, index) => {
        date.push(val.optTime)
        data.push(val.val)
      })
      const option = {
        xAxis: {
          type: 'category',
          data: date
        },
        yAxis: {
          type: 'value',
          show: true,
          name: '用气量趋势'
        },
        tooltip: {
          trigger: 'axis',
          formatter: '日期:{b}<br>用气量:{c}'
        },
        series: [
          {
            data: data,
            type: 'bar',
            showBackground: true,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#1C92D8'
                  },
                  {
                    offset: 1,
                    color: '#38b0de'
                  }
                ]),
                label: {
                  show: true, // 开启显示
                  formatter: '{c}',
                  //   rotate: 90,
                  //   align: 'left',
                  distance: 10,
                  position: 'top',
                  textStyle: {
                    // 数值样式
                    color: 'black',
                    fontSize: 14
                  }
                }
              }
            }
          }
        ]
      }
      myChartone.setOption(option)
      window.addEventListener('resize', () => {
        myChartone.resize()
      })
    },
    // 异常情况统计
    chartchartyichang () {
      const myChart7 = this.$echarts.init(
        document.getElementById('chartyichang')
      )
      const data = []
      const date = []
      this.$_.forEach(this.listAbnormals, (val, index) => {
        date.push(val.optTime)
        data.push(val.val)
      })
      const option = {
        xAxis: {
          type: 'category',
          data: date
        },
        yAxis: {
          type: 'value',
          show: true,
          name: '异常情况'
        },
        tooltip: {
          trigger: 'axis',
          formatter: '日期:{b}<br>异常情况:{c}'
        },
        series: [
          {
            data: data,
            type: 'bar',
            showBackground: true,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#1C92D8'
                  },
                  {
                    offset: 1,
                    color: '#38b0de'
                  }
                ]),
                label: {
                  show: true, // 开启显示
                  formatter: '{c}',
                  distance: 15,
                  textStyle: {
                    // 数值样式
                    color: 'black',
                    fontSize: 14
                  }
                }
              }
            }
          }
        ]
      }
      myChart7.setOption(option)
      window.addEventListener('resize', () => {
        myChart7.resize()
      })
    },
    // 上传成功率
    chartsus () {
      const myChart8 = this.$echarts.init(document.getElementById('chartsus'))
      const data = []
      const date = []
      this.$_.forEach(this.listAbnormals, (val, index) => {
        date.push(val.optTime)
        data.push(val.val)
      })
      const option = {
        visualMap: [
          {
            show: false,
            type: 'continuous',
            seriesIndex: 0
          }
        ],
        xAxis: {
          type: 'category',
          data: date,
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          show: true,
          name: '上传成功率(%)'
        },
        tooltip: {
          trigger: 'axis',
          formatter: '日期:{b}<br>上传成功率:{c}'
        },
        series: [
          {
            data: data,
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: '#1C92D8',
                width: 3
              }
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#1C92D8'
                  },
                  {
                    offset: 1,
                    color: '#fff'
                  }
                ]),
                width: 3
              }
            }
          }
        ]
      }
      myChart8.setOption(option)
      window.addEventListener('resize', () => {
        myChart8.resize()
      })
    },
    // 各种用户用量占比
    chartnumberuser () {
      const myChart9 = this.$echarts.init(
        document.getElementById('chartnumberuser')
      )
      const option = {
        title: {
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'center',
          left: 'right',
          data: ['用户', '工商', '团缴', '公用', '其他']
        },
        series: [
          {
            name: '用户用量占比',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '用户' },
              { value: 310, name: '工商' },
              { value: 234, name: '团缴' },
              { value: 135, name: '公用' },
              { value: 1548, name: '其他' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      myChart9.setOption(option)
      window.addEventListener('resize', () => {
        myChart9.resize()
      })
    }
  }
}
</script>
<style>
p {
  margin: 0;
}
.analysis .el-card__body {
  background: #f0f2f5;
}
.analysis .el-tabs__item {
  padding: 0 30px;
  line-height: 40px;
  height: 40px;
  font-size: 16px;
}
.analysis .el-tabs__nav {
  margin-left: 20px;
}
.analysis .elcard .el-card__body {
  background: white;
}
.titlebox {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  padding: 5px 5px;
  line-height: 22px;
}
.number {
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  color: #666;
  margin-top: 4px;
  margin-bottom: 0;
  font-size: 30px;
  line-height: 38px;
  height: 38px;
}
.titlebottom {
  font-size: 14px;
  line-height: 22px;
}
.bordertop {
  border-top: 1px solid #e8e8e8;
  width: 70%;
  margin-top: -30px;
}
.bordertopf {
  border-top: 1px solid #e8e8e8;
  width: 70%;
}
.chartContent {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
}
.chartContentmiddle {
  width: 90%;
  height: 300px;
  display: flex;
  justify-content: center;
}
.chartContentyuan {
  width: 80%;
  height: 400px;
  display: flex;
  justify-content: center;
}
.usernumber {
  font-size: 16px;
  padding: 16px 12px;
  text-overflow: ellipsis;
  border-bottom: 1px solid #e8e8e8;
  overflow: hidden;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
}
.myborderuser {
  border-bottom: 1px solid #e8e8e8;
}
/* .el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
} */
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
