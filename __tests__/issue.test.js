
import { shallowMount } from '@vue/test-utils'
import Issue from './Issue.vue'

const wrapper = shallowMount(Issue)

describe('Issue', () => {
  const div = wrapper.find('div')
    
  it('find div', ()=>{
    expect(div.exists()).toBe(true)
    expect(div.element.id).toBe('rec')
    
  }) 

  it('check width',()=>{
    wrapper.setData({ width: 40 })

    expect(wrapper.vm.width).toBe(40)
  })
  
  it('check scale',()=>{
    expect(wrapper.vm.scale).toBe(1)
  })

  it('check json', ()=>{

    expect(wrapper.vm.myJson).toEqual({
        "issue1": {   
          "days": 5,
          "startDate": "2020-07-07",   
          "endDate": "2020-07-12"
        }
    })

  })

  it('check zoom by wheel', async () => {
    const div= wrapper.find('div')
        
    await div.trigger('wheel')
    expect(wrapper.vm.width).toBe(40)
    expect(wrapper.find('div').attributes().style).toBe("width: 40px;")
  })

})
