<template>
  <div class="middlewidth">
    <div class="topmid">
      <a-row>
        <a-col
          :span="12"
          :offset="4">
          <p class="font mar">姓名：王单宇</p>
          <p class="font">电话：18261195735</p>
          <p class="font">邮箱：714213709@qq.com</p>
          <p class="font">出生日期：1997-2-15</p>
          <p class="font">喜欢做的事情：吃，喝，玩</p>
          <p class="font">最想做的事情：开一家猫咖</p>
        </a-col>
        <a-col :span="8">
          <img
            style="width:60%;margin-top:20px;"
            src="../../assets/touxiang.jpg"
            alt="">
        </a-col>
      </a-row>
    </div>
    <p class="fosnt">个人技能</p>
    <a-row type="flex" justify="space-around">
      <a-col :span="6">
        <span class="ant-rate-text">DOTA2</span>
        <a-rate :default-value="5" allow-half disabled />
      </a-col>
      <a-col :span="6">
        <span class="ant-rate-text">吹逼</span>
        <a-rate :default-value="4" allow-half disabled />
      </a-col>
      <a-col :span="6">
        <span class="ant-rate-text">羽毛球</span>
        <a-rate :default-value="2.5" allow-half disabled />
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-around">
      <a-col :span="6">
        <span class="ant-rate-text" style="margin-right:20px">ps</span>
        <a-rate :default-value="3.5" allow-half disabled />
      </a-col>
      <a-col :span="6">
        <span class="ant-rate-text" style="margin-right:20px">pr</span>
        <a-rate :default-value="3" allow-half disabled />
      </a-col>
      <a-col :span="6">
        <span class="ant-rate-text">axure</span>
        <a-rate :default-value="2.5" allow-half disabled />
      </a-col>
    </a-row>
    <p class="fosnt">学习经历</p>
    <a-table
      :columns="columns"
      :data-source="data">
    </a-table>
    <p class="fosnt">对于日记</p>
    <p>小时候就有一个习惯就是写日记，从小学开始，依稀记得第一本日记本，当然这很大一分部分功劳归功于老师布置的家庭作业，当然，老师布置的
      日记无非就是我今天学会了什么，遇到了什么事，这件事让我有什么感触。而我们想写的日子就是我们内心里想说的，比如今天老师说了什么话自己很反感，
      但是这种事是个学生都不能放在嘴边，你只能藏在你的日记里，因为你只要告诉了一个人，总会有泄漏的风险，但是如果别人不翻动你的日记本，那么你的心事
      无人可知，你可以尽情倾诉，这就是成为倾泻自己情绪的一种方式。
    </p>
    <!-- <p>DOTA名场面：</p>
    <p>1.ti6dc的对战棚里出现了这个画面面对绝活海wings，bp根本没有办法去完成针对，wings想玩什么体系就玩什么体系。</p>
    <img style="width:20%" src="../../assets/dcloser.jpg" alt=""> -->
  </div>
</template>
<script>
const columns = [
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time'
  },
  {
    title: '学校',
    dataIndex: 'school',
    key: 'school'
  },
  {
    title: '专业',
    dataIndex: 'master',
    key: 'master'
  },
  {
    title: '收获',
    dataIndex: 'gets',
    key: 'gets',
    ellipsis: true
  }
]

const data = [
  {
    key: '1',
    time: '2015-9~2019-6',
    school: '江苏理工学院',
    master: '数字媒体',
    gets: '工作技能，交到朋友'
  },
  {
    key: '2',
    time: '2013-9~2015-6',
    school: '如东高级中学',
    master: '学生',
    gets: '为人处世，努力学习'
  }
]
export default {
  name: 'Workplace',
  data () {
    return {
      data,
      columns,
      value: 3
    }
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style>
.middlewidth {
  width: 40%;
  margin-left: 30%;
}
.topmid {
  background: #2a3c52;
  height: 260px;
}
.font {
  font-size: 16px;
  font-family: 'AlibabaPuHuiTiR';
  color: white;
  margin-bottom:8px
}
.fosnt {
  font-size: 24px;
  font-family: 'AlibabaPuHuiTiR';
  color: black;
  margin:0
}
.mar {
  margin-top: 30px;
}
</style>
