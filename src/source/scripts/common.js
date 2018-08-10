/**
 * Created by admin on 2018/8/8.
 */
JUI = {
    version: '1.0.0',
    baseUrl: "",
    ajax:function (option) {
        return $.ajax({
            url:option.url,
            type:option.type,
            data:option.data,
            success:function (res) {
                if(option.success){
                    option.success(res);
                }
            }
        })
    },
    menuData:[
        {
            "text": "demo",
            "children": [
                {
                    "text": "demo",
                    "children": [
                        {
                            "text": "form",
                            "url": "../demo/form/form.html"
                        },
                        {
                            "text": "grid",
                            "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "formgrid",
                            "url": "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "tab",
                            "url": "../demo/tab/tab.html"
                        },
                        {
                            "text": "tree",
                            "url": "../demo/tree/tree.html"
                        }
                    ]
                }
            ]
        },
        {
            "text":"客户管理",
            "children":[
                {
                    "text": "客户管理",
                    "children": [
                        {
                            "text": "我的客户", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "grid", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "formgrid","url" : "../demo/formgrid/formgrid.html"
                        }
                    ]
                },
                {
                    "text": "客户查询",
                    "children": [
                        {
                            "text": "业务单查询", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "保险查询", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "formgrid","url" : "../demo/formgrid/formgrid.html"
                        }
                    ]
                }
            ]
        },

        {
            "text":"工作单管理",
            "children":[
                {
                    "text": "我的业务",
                    "children": [
                        {
                            "text": "出口业务", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "海铁业务", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "formgrid","url" : "../demo/formgrid/formgrid.html"
                        }
                    ]
                },
                {
                    "text": "船期跟踪",
                    "children": [
                        {
                            "text": "船期信息维护", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "船期跟踪", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "发送日志查询","url" : "../demo/formgrid/formgrid.html"
                        }
                    ]
                },
                {
                    "text": "海运操作",
                    "children": [
                        {
                            "text": "船期跟踪", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "更改船期", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "出口操作","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "进口操作","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "海铁联运","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "费用更改单","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "送货单管理","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "平台进口数据","url" : "../demo/formgrid/formgrid.html"
                        }
                    ]
                },
                {
                    "text": "拖车业务",
                    "children": [
                        {
                            "text": "申请装货计划", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "申请送货拖车", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "提交拖车委托单","url" : "../demo/formgrid/formgrid.html"
                        }
                    ]
                },
                {
                    "text": "综合查询",
                    "children": [
                        {
                            "text": "出口操作单查询", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "进口操作单查询", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "海铁联运单查询","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "保险费查询","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "代收款查询","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "走船清单","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "内贸箱号清单","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "送货清单","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "目的港柜量统计","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "装货毛利表","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "船公司月统计报表","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "船公司货柜统计","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "起运拖车查询","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "送货明细查询","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "客户物流跟踪","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "电商接口","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "操作日志查询","url" : "../demo/formgrid/formgrid.html"
                        }
                    ]
                }


            ]
        },
        {
            "text":"财务管理",
            "children": [
                {
                    "text": "海运单管理",
                    "children": [
                        {
                            "text": "出口操作", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "进口操作", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "海铁联运","url" : "../demo/formgrid/formgrid.html"
                        }
                    ]
                },
                {
                    "text": "财务结算",
                    "children": [
                        {
                            "text": "毛利调整", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "应收款核销", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "开票管理","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "付款申请","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "发票税管理","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "代收款查询","url" : "../demo/formgrid/formgrid.html"
                        }
                    ]
                },
                {
                    "text": "凭证导入",
                    "children": [
                        {
                            "text": "应收款费用", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "应付业务费", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "应付款","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "应付保险","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "代收费用","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "进口应收费用","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "计提发票税","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "发票税","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "凭证导入","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "科目代码设置","url" : "../demo/formgrid/formgrid.html"
                        }
                    ]
                },
                {
                    "text": "数据锁定",
                    "children": [
                        {
                            "text": "工作单检查", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "数据锁定", "url": "../demo/grid/grid.html"
                        }
                    ]
                },
                {
                    "text": "统计报表",
                    "children": [
                        {
                            "text": "应收款月对账单(新)", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "应付款明细单", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "应收款明细单", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "代收款明细单", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "应收款月对账单(老)", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "财务借贷财务报表", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "业务明细表", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "业务费/保险费", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "业务员利润表", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "应付费情况统计", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "客户结算报表", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "车队毛利统计", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "驳船毛利统计", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "业务费明细", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "业务员利润筛查", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "业务员利润筛查", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "应收款核销报表", "url": "../demo/grid/grid.html"
                        }
                    ]
                },
            ]
        },
        {
            "text":"车队管理",
            "children": [
                {
                    "text": "车队基础数据",
                    "children": [
                        {
                            "text": "委托单位维护", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "结算单位维护", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "业务员管理","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "司机管理","url" : "../demo/formgrid/formgrid.html"
                        }
                    ]
                },
                {
                    "text": "拖车业务",
                    "children": [
                        {
                            "text": "代送货柜", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "委托单业务", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "业务调度","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "委托单审核","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "代收款管理","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "出车费用","url" : "../demo/formgrid/formgrid.html"
                        }
                    ]
                },
                {
                    "text": "财务结算",
                    "children": [
                        {
                            "text": "应收款销核", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "付款申请单", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "委托单锁定","url" : "../demo/formgrid/formgrid.html"
                        }
                    ]
                },
                {
                    "text": "凭证导入",
                    "children": [
                        {
                            "text": "科目代码设置","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "检查车队结算单位注册","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "应收款费用", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "代收费", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "自有车凭证","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "合作单位凭证","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "其他单位凭证","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "凭证导出","url" : "../demo/formgrid/formgrid.html"
                        }

                    ]
                },
                {
                    "text": "报表查询",
                    "children": [
                        {
                            "text": "应收款报表明细","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "应付款报表明细","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "财务应收统计报表", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "财务应付统计报表", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "应收核销查询","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "应付款查询","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "毛利统计表","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "实收实付查询","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "自有车利润表","url" : "../demo/formgrid/formgrid.html"
                        }

                    ]
                },
                {
                    "text": "操作日志查询",
                    "children": [
                        {
                            "text": "车队日志查询", "url": "../demo/formgrid/formgrid.html"
                        }
                    ]
                }



            ]
        },
        {
            "text":"驳船管理",
            "children": [
                {
                    "text": "驳船业务",
                    "children": [
                        {
                            "text": "驳船业务单", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "船公司业务订单", "url": "../demo/grid/grid.html"
                        }
                    ]
                },
                {
                    "text": "货柜管理",
                    "children": [
                        {
                            "text": "驳船船期", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "货柜盘存", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "驳点货柜动态","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "船公司货柜盘存","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "船公司货柜动态","url" : "../demo/formgrid/formgrid.html"
                        }
                    ]
                },
                {
                    "text": "财务结算",
                    "children": [
                        {
                            "text": "付款申请", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "应收核销", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "第二收款人核销","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "毛利调整","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "驳船月租费","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "业务单锁定","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "应收款凭证","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "应付款凭证","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "导出凭证","url" : "../demo/formgrid/formgrid.html"
                        }
                    ]
                },
                {
                    "text": "报表查询",
                    "children": [
                        {
                            "text": "客户核销报表", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "第二收款人情况报表", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "应收款明细","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "应付款明细","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "财务统计应收款","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "财务统计应付款","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "毛利统计","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "驳船点柜量统计","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "船公司柜量统计","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "客户业务统计","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "应付费情况","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "应收费情况","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "驳船运营报表","url" : "../demo/formgrid/formgrid.html"
                        }
                    ]
                },
                {
                    "text": "基础数据",
                    "children": [
                        {
                            "text": "货柜预警", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "船公司管理", "url": "../demo/grid/grid.html"
                        },
                        {
                            "text": "客户信息","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "驳船点","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "驳船管理","url" : "../demo/formgrid/formgrid.html"
                        },
                        {
                            "text": "结算单位","url" : "../demo/formgrid/formgrid.html"
                        }
                    ]
                },
                {
                    "text": "日志查询",
                    "children": [
                        {
                            "text": "操作日志", "url": "../demo/form/form.html"
                        }
                    ]
                }
            ]
        },
        {
            "text":"报表管理",
            "children": [
                {
                    "text": "海运业务统计分析",
                    "children": [
                        {
                            "text": "应收款统计", "url": "../demo/form/form.html"
                        }
                    ]
                },
                {
                    "text": "车队业务统计分析",
                    "children": [
                        {
                            "text": "月业务量分析", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "年度业务量分析", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "年度毛利分析", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "应收款统计", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "应付款统计", "url": "../demo/form/form.html"
                        }
                    ]
                },
                {
                    "text": "驳船业务统计分析",
                    "children": [
                        {
                            "text": "月业务量分析", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "客户月业务量分析", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "年度业务量分析", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "应收款统计", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "应付款统计", "url": "../demo/form/form.html"
                        }
                    ]
                }
            ]
        },
        {
            "text":"行政人事",
            "children": [
                {
                    "text": "部门管理",
                    "children": [
                        {
                            "text": "部门管理", "url": "../demo/form/form.html"
                        }
                    ]
                },
                {
                    "text": "人员管理",
                    "children": [
                        {
                            "text": "人员管理", "url": "../demo/form/form.html"
                        }
                    ]
                },
                {
                    "text": "投诉管理",
                    "children": [
                        {
                            "text": "投诉流水", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "投诉报表", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "投诉分类", "url": "../demo/form/form.html"
                        }
                    ]
                }
            ]
        },
        {
            "text":"系统管理",
            "children": [
                {
                    "text": "系统设置",
                    "children": [
                        {
                            "text": "组织机构管理", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "角色管理", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "用户管理", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "客户用户管理", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "模块定义", "url": "../demo/form/form.html"
                        }
                    ]
                },
                {
                    "text": "协同办公",
                    "children": [
                        {
                            "text": "系统消息提醒", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "短信即时发送", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "短信定时发送", "url": "../demo/form/form.html"
                        }
                    ]
                },
                {
                    "text": "基础数据",
                    "children": [
                        {
                            "text": "工作单类型", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "商品信息", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "港口管理", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "船公司信息", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "保险公司", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "付款结算单位", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "通道设置", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "码头管理", "url": "../demo/form/form.html"
                        }
                    ]
                },
                {
                    "text": "关系设置",
                    "children": [
                        {
                            "text": "业务员设置", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "客服员设置", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "商务员设置", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "经理设置", "url": "../demo/form/form.html"
                        }
                    ]
                },
                {
                    "text": "日志管理",
                    "children": [
                        {
                            "text": "系统管理日志", "url": "../demo/form/form.html"
                        },
                        {
                            "text": "登录日志查询", "url": "../demo/form/form.html"
                        }
                    ]
                }
            ]
        },
        {
            "text":"授权码"
        },
        {
            "text":"修改密码"
        },
        {
            "text":"退出"
        }

    ]
}