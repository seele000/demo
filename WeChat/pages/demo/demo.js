//demo.js
var app = getApp();
var dataObj = {
    list: [
      {content:'default1',isChecked: 'false'},
      {content:'default2',isChecked: 'true'}
    ],
    creatTypeHidden: true,
    creatType:['新建项目','新建项目组'],
    inputPlanShow: false,
    inputPlan: ''
  }
Page({
  data: dataObj,
  onShow: function () {
    console.log(this.data.list)
  },
  /*事件*/
  listenCheckboxChange: function () {
    
  },
  /*新建项目*/
  creatType: function (e) {
    this.setData({
      creatTypeHidden : !this.data.creatTypeHidden
    })
  },
  creatTypeChange: function () {
    this.setData({
      creatTypeHidden : !this.data.creatTypeHidden
    })
  },
  creatTypeItem:function(e){
    /*获取自定义属性值*/
    var type = e.currentTarget.dataset.id;
    this.setData({
      creatTypeHidden : !this.data.creatTypeHidden
    })
    if(type == 'creatType0') {
      this.setData({
        inputPlanShow : !this.data.inputPlanShow
      })
    }
  },
  savePlan: function (e) {
    /*input输入框获取value值：e.detail.value*/
    var value = e.detail.value;;
    var obj = {content: value}
    this.data.list.push(obj);
    this.setData({
      inputPlanShow : false
    })
    /*重新渲染列表*/
    
    console.log(e.detail.value)
  }
})