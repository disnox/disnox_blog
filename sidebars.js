/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  skill: [
    'skill/introduction',
    {
        label: 'Linux',
        type: 'category',
        link: {
          type: 'generated-index',
        },
        items: [
          'skill/linux/Linux_introduction',
          'skill/linux/Linux_shell',
        ],
    },

    {
      label: 'C 语言',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          label: 'C 语言基础',
          type: 'category',
          link: {
          type: 'generated-index',
          },
          items: [
              'skill/C/C_Basic/C_brief_introduction',
              'skill/C/C_Basic/C_environment_settings',
              'skill/C/C_Basic/C_program_structure',
              'skill/C/C_Basic/C_basic_syntax',
              'skill/C/C_Basic/C_keyword',
              'skill/C/C_Basic/C_datetype',
              'skill/C/C_Basic/C_variable_constant',
              'skill/C/C_Basic/C_operator',
              'skill/C/C_Basic/C_control_flow',
              'skill/C/C_Basic/C_function',
              'skill/C/C_Basic/C_array',
                {
                  label: 'C 指针',
                  type: 'category',
                  link: {
                  type: 'generated-index',
                  },
                  items: [
                    'skill/C/C_Basic/C_pointer',
                    'skill/C/C_Basic/C_two_pointer',
                    'skill/C/C_Basic/C_pointer_and_array',
                  ]
                },
              'skill/C/C_Basic/C_character_string',
              ]        
         },
         {
          label: 'C 数据结构',
          type: 'category',
          link: {
          type: 'generated-index',
          },
          items: [
              'skill/C/C_Data_Structure/data_structure',
              ]        
         }
      ],
    },

    // {
    //   label: 'C 语言',
    //   type: 'category',
    //   link: {
    //     type: 'generated-index',
    //   },
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'skill/C',
    //     },
    //   ],
    // },

    {
      label: '嵌入式开发-硬件',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          label: '元器件基础',
          type: 'category',
          link: {
          type: 'generated-index',
          },
          items: [
            'skill/hardware/component/Res',
            'skill/hardware/component/Cap',
            'skill/hardware/component/MOS',
              ]        
         },
         {
          label: '常用电路分析',
          type: 'category',
          link: {
          type: 'generated-index',
          },
          items: [

              ]        
         },
      ]
    },

    {
      label: '杂项',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/other',
        },
      ],
    },
  ],
  tools: [
    'tools/introduction',
    'tools/everything-quick-search-local-files',
    'tools/windows-custom-right-click-menu',
    'tools/windows-terminal-beautify',
    'tools/vscode-config',
  ],
}

module.exports = sidebars
