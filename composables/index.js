
export const colorList = [
    '#6247aa',
    '#7251b5',
    '#815ac0',
    '#9163cb',
    '#a06cd5',
    '#b185db',
    '#c19ee0',
]

export const menuItemsEnum = [
    {id:0,title:'👁️ 检索', root:'book',url:'/book/book-index', color:'#6247aa'},
    {id:1,title:'🌎 站点', root:'',url:'', color:'#7251b5'},
    {id:2,title:'🎨 创作者', root:'',url:'', color:'#815ac0'},
    {id:3,title:'📄 清单', root:'',url:'', color:'#9163cb'},
    {id:4,title:'🤖 AI', root:'',url:'', color:'#a06cd5'},
    {id:5,title:'⚙️ 设置', root:'setting',url:'/setting/setting-index', color:'#b185db'},
    {id:6,title:'👋 登出', root:'',url:'', color:'#c19ee0'},
]
export const useMenu = ()=>useState('menu',()=>{
    return menuItemsEnum[0]
})

