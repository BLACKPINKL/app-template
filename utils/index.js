// 获取时间格式 yy-mm-dd hh:mm:ss
export const getNowFormatDate = function(d, type = 1) {
	var date;
	if (!d) {
		date = new Date();
	}else{
		date = new Date(d);
	}
	// var date = new Date(d);
	var seperator1 = "-";
	var seperator2 = ":";
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate;
	if (type && type == 1) { //yy-mm-dd hh:mm:ss
		currentdate = year + seperator1 + month + seperator1 + strDate + ' ' + hours + seperator2 + minutes + seperator2 +
			seconds;
	} else if (type && type == 2) { //yy-mm
		currentdate = year + seperator1 + month;
	} else {
		currentdate = year + seperator1 + month + seperator1 + strDate;
	}
	return currentdate;
}

// 数据类型检测
export const typeOf = (obj) => {
  const toString = Object.prototype.toString
  const map = {
      '[object Boolean]'  : 'boolean',
      '[object Number]'   : 'number',
      '[object String]'   : 'string',
      '[object Function]' : 'function',
      '[object Array]'    : 'array',
      '[object Date]'     : 'date',
      '[object RegExp]'   : 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]'     : 'null',
      '[object Object]'   : 'object'
  }
  return map[toString.call(obj)]
}

// 深拷贝
export const deepCopy = (data) => {
  const t = typeOf(data)
  let o

  if (t === 'array') {
      o = []
  } else if ( t === 'object') {
      o = {}
  } else {
      return data
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]))
    }
  } else if ( t === 'object') {
    for (let i in data) {
      if (Object.prototype.hasOwnProperty.call(data, i)) {
        o[i] = deepCopy(data[i])
      }
    }
  }
  return o
}

// 获取根据年月 获取天数
export function mGetDate(year, month){
  var d = new Date(year, month, 0);
  let days = d.getDate()
  let res = []
  for (let i = 1; i <= days; i++) {
    res.push({
      value: i >= 10 ? i : '0' + i,
      label: `${i}号`
    })
  }

  return res;
}

// 获取月份
export function mGetMonth(){
  let res = [
    {
      value: '01',
      label: '一月'
    },
    {
      value: '02',
      label: '二月'
    },
    {
      value: '03',
      label: '三月'
    },
    {
      value: '04',
      label: '四月'
    },
    {
      value: '05',
      label: '五月'
    },
    {
      value: '06',
      label: '六月'
    },
    {
      value: '07',
      label: '七月'
    },
    {
      value: '08',
      label: '八月'
    },
    {
      value: '09',
      label: '九月'
    },
    {
      value: '10',
      label: '十月'
    },
    {
      value: '11',
      label: '十一月'
    },
    {
      value: '12',
      label: '十二月'
    },
    
  ]

  return res;
}

// 根据数字 获取前N年份 和N年后年份

export function mGetOldYear(count, year) {
  year = parseInt(year)
  let res = []
  console.log('count', count);
  for (let i = 0; i <= count; i++) {
    let value = year - i
    res.push({
      value,
      label: `${value}年`
    })
  }
  res = res.reverse()

  console.log('years', res);

  for (let i = 1; i <= count; i++) {
    let value = year + i
    res.push({
      value,
      label: `${value}年`
    })
  }
  console.log('years2', res);
  return res
}

// 根据数字 获取数据前后
export function getDataBeforeAndAfter(arr, index, len) {

  if(index < len) {
    return arr.slice(0, len * 2 + 1)
  }

  if((arr.length) - index <= len) {
    console.log((arr.length - 1) - (len * 2));
    return arr.slice((arr.length - 1) - (len * 2))
  }

  let start = (index - len) <= 0 ? 0 : (index - len) 
  let before = arr.slice(start, index)
  // console.log('start', start);
  let after = arr.slice((index + 1), (index + len) + 1)
  before.push(arr[index])
  return before.concat(after)
}
// 获取当天是星期几
export const getWeek = () => {
  const week = [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六'
  ]

  let date = new Date()
  let day = date.getDay()
  return week[day]
}
