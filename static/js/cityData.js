import {
		cityList
	} from '../../static/js/api.js'
let cityRows = []
async function getCityJson() {
	let data = []
	cityRows = await cityList()			
	// console.log(cityRows,"++++")
	if (cityRows.length) {
		// 递归生成
		data = handleTree(cityRows)
		// console.log("123")
	}
	return data
	}
// getCityJson()
// 省市区数据树生成
export default async function get_city_tree() {
		let res = []
		res = await getCityJson()
		// console.log(res)
		return res
	}
	// get_city_tree()
	function handleTree(data, parent_code = null) {
		let res = []

		let keys = {
			id: 'code',
			pid: 'parent_code',
			children: 'children',

			text: 'name',
			value: 'code'
		}

		let oneItemDEMO = {
			text: '',
			value: '',
			children: []
		}
		let oneItem = {}

		// 循环
		for (let index in data) {
			// 判断
			if (parent_code === null) {
				// 顶级菜单 - 省
				if (!data[index].hasOwnProperty(keys.pid) || data[index][keys.pid] == parent_code) {
					// 不存在parent_code，或者已匹配
					oneItem = JSON.parse(JSON.stringify(oneItemDEMO))
					oneItem.text = data[index][keys.text]
					oneItem.value = data[index][keys.value]

					// 递归下去
					oneItem.children = handleTree(data, data[index][keys.id])
					res.push(oneItem)

				} else {
					// 匹配不到，跳过
				}

			} else {
				// 非顶级菜单 - 市、区、街道
				if (data[index].hasOwnProperty(keys.pid) && data[index][keys.pid] == parent_code) {
					// 已匹配
					oneItem = JSON.parse(JSON.stringify(oneItemDEMO))
					oneItem.text = data[index][keys.text]
					oneItem.value = data[index][keys.value]

					// 递归下去
					oneItem.children = handleTree(data, data[index][keys.id])
					res.push(oneItem)

				} else {
					// 匹配不到，跳过
				}

			}

		}

		return res	
	}