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
                    'skill/C/C_Basic/C_pointer_array_and_pointer_array',
                  ]
                },
              'skill/C/C_Basic/C_character_string',
              'skill/C/C_Basic/C_function_order',
              'skill/C/C_Basic/C_pointer_High_level_issues',      
                {
                  label: 'C 复杂类型',
                  type: 'category',
                  link: {
                  type: 'generated-index',
                  },
                  items: [
                    'skill/C/C_Basic/C_typedef',
                    'skill/C/C_Basic/C_struct',
                    'skill/C/C_Basic/C_union_enum',
                    'skill/C/C_Basic/C_struct_size',
                  ]
                },
              'skill/C/C_Basic/C_memory',
              'skill/C/C_Basic/C_scope',
              'skill/C/C_Basic/C_pretreatment',
      ],
    },
    {
      label: '数据结构',
      type: 'category',
      link: {
      type: 'generated-index',
      },
      items: [
          'skill/C/C_Data_Structure/data_structure',
          'skill/C/C_Data_Structure/linear_table',
          'skill/C/C_Data_Structure/single_linked_list',
          'skill/C/C_Data_Structure/singly_loop_linked_list',
          'skill/C/C_Data_Structure/double_linked_list',
          'skill/C/C_Data_Structure/inline_list',
          'skill/C/C_Data_Structure/stack',
          'skill/C/C_Data_Structure/queue',
          'skill/C/C_Data_Structure/binary_tree',
          ]        
     },
     {
      label: 'IO 编程技术',
      type: 'category',
      link: {
      type: 'generated-index',
      },
      items: [
          'skill/C/FILE_IO/file',
          'skill/C/FILE_IO/system_io',
          'skill/C/FILE_IO/standard_io',
          'skill/C/FILE_IO/stat',
          'skill/C/FILE_IO/dir',
          ]        
     },
     {
      label: 'Linux 系统编程',
      type: 'category',
      link: {
      type: 'generated-index',
      },
      items: [
          'skill/C/System/process',
          'skill/C/System/pro_api',
          'skill/C/System/pipe',
          'skill/C/System/signal',
          'skill/C/System/ipc',
          'skill/C/System/msg',
          'skill/C/System/sem',
          'skill/C/System/shm',
          'skill/C/System/thread',
          'skill/C/System/thread_scheduling',
          'skill/C/System/posix',
          'skill/C/System/mutex',
          'skill/C/System/rwlock',
          'skill/C/System/cond',
          'skill/C/System/reen',
          'skill/C/System/thread_pool',
          ]        
     },
     {
      label: 'Linux 网络编程',
      type: 'category',
      link: {
      type: 'generated-index',
      },
      items: [
          'skill/C/Network/socket',
          ]        
     },
    {
      label: '硬件基础',
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
      label: '电机控制',
      type: 'category',
      link: {
      type: 'generated-index',
      },
      items: [
          'skill/motor/pmsm/pmsm_motor',
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
  project_group: [
    'project_group/introduction',
    {
      label: '电机控制',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          label: 'AxDrive-L',
          type: 'category',
          link: {
          type: 'generated-index',
          },
          items: [
            'project_group/motor_ctrl/AxDrive-L/AxDrive-L_user_manual',
            'project_group/motor_ctrl/AxDrive-L/AxDrive-L_hardware_design_report',
            'project_group/motor_ctrl/AxDrive-L/AxDrive-L_software_design_report',
            
          ]
        },
      ],
  },
  ],
}

module.exports = sidebars
