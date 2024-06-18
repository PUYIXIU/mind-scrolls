
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
    {id:0,title:'👁️ 检索', url:'', color:'#6247aa'},
    {id:1,title:'🌎 站点', url:'', color:'#7251b5'},
    {id:2,title:'🎨 创作者', url:'', color:'#815ac0'},
    {id:3,title:'📄 清单', url:'', color:'#9163cb'},
    {id:4,title:'🤖 AI', url:'', color:'#a06cd5'},
    {id:5,title:'⚙️ 设置', url:'', color:'#b185db'},
    {id:6,title:'👋 登出', url:'', color:'#c19ee0'},
]
export const useMenu = ()=>useState('menu',()=>menuItemsEnum[0])
