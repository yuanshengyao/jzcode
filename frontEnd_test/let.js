var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length - 1; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] == target) {
        return [i, j]
      }
    }
  }
};

var twoSum = function(nums, target) {
  let hash = {}
  for(let i = 0; i < nums.length; i++) {
    hash[nums[i]] = i
  }
  for(let i = 0; i < nums.length; i++) {
    if(hash[target - nums[i]] != undefined && i != hash[target - nums[i]]) {
      return [i, hash[target - nums[i]]]
    }
  }
};

// --------------------------------------------------------------------

function nixv(list) {
  let j = list.length - 1
  for(let i = 0; i < list.length; i++, j--) {
    if(j > i) {
      let temp = list[i]
      list[i] = list[j]
      list[j] = temp
    }
  }
}

var addTwoNumbers = function(l1, l2) {
  let longlist = []
  let shortlist = []
  let targetlist = []
  if(l1.length > l2.length) {
    longlist = l1
    shortlist = l2
  }else {
    longlist = l2
    shortlist = l1
  }
  let jinwei = false
  let num = 0
  for(let i = 0; i < longlist.length; i++) {
    if(i >= shortlist.length) {
      num = longlist[i]
    }else {
      num = longlist[i] + shortlist[i]
    }
    if(jinwei) {
      num ++
    }
    if(num <= 9) {
      jinwei = false
      targetlist.push(num)
    }else {
      jinwei = true
      targetlist.push(num - 10)
    }
  }
  return targetlist
};

