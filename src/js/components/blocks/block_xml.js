import Blockly from 'blockly';
import { BlocklyWorkspace } from 'react-blockly';

export const Categories = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'たべもの',
      expanded: true,
      colour: 0,
      contents: [
        {
          kind: 'block',
          type: 'rice',
        },
        {
          kind: 'block',
          type: 'bread',
        },
        {
          kind: 'block',
          type: 'curry-rice',
        },
        {
          kind: 'block',
          type: 'tya-han',
        },
        {
          kind: 'block',
          type: 'omurice',
        },
        {
          kind: 'block',
          type: 'gyu_don',
        },
        {
          kind: 'block',
          type: 'ra-men',
        },
        {
          kind: 'block',
          type: 'sushi',
        },
        {
          kind: 'block',
          type: 'yakisoba',
        },
        {
          kind: 'block',
          type: 'hamburger',
        },
        {
          kind: 'block',
          type: 'nikuman',
        },
        {
          kind: 'block',
          type: 'gyoza',
        },
        {
          kind: 'block',
          type: 'hamburg',
        },
        {
          kind: 'block',
          type: 'tonkatsu',
        },
        {
          kind: 'block',
          type: 'saba_no_shioyaki',
        },
        {
          kind: 'block',
          type: 'orange',
        },
        {
          kind: 'block',
          type: 'apple',
        },
        {
          kind: 'block',
          type: 'potato_chips',
        },
        {
          kind: 'block',
          type: 'biscuit',
        },
        {
          kind: 'block',
          type: 'softcream',
        },
        {
          kind: 'block',
          type: 'choko',
        },
        {
          kind: 'block',
          type: 'cake',
        },
        {
          kind: 'block',
          type: 'cake (1)',
        },
      ],
    },
    {
      kind: 'category',
      name: 'がっき',
      expanded: true,
      colour: 20,
      contents: [
        {
          kind: 'block',
          type: 'guiter',
        },
        {
          kind: 'block',
          type: 'guiter_p',
        },
      ],
    },
    {
      kind: 'category',
      name: 'いきもの',
      expanded: true,
      colour: 40,
      contents: [
        {
          kind: 'block',
          type: 'cat',
        },
        {
          kind: 'block',
          type: 'shibainu',
        },
      ],
    },
    {
      kind: 'category',
      name: 'てんき',
      expanded: true,
      colour: 60,
      contents: [
        {
          kind: 'block',
          type: 'sun',
        },
        {
          kind: 'block',
          type: 'cloud',
        },
        {
          kind: 'block',
          type: 'cloud2',
        },
        {
          kind: 'block',
          type: 'rain',
        },
        {
          kind: 'block',
          type: 'kaminari',
        },
        {
          kind: 'block',
          type: 'snow',
        },
      ],
    },
    {
      kind: 'category',
      name: 'スポーツ',
      expanded: true,
      colour: 80,
      contents: [
        {
          kind: 'block',
          type: 'basket',
        },
        {
          kind: 'block',
          type: 'baseball',
        },
        {
          kind: 'block',
          type: 'soccer',
        },
        {
          kind: 'block',
          type: 'volleyball',
        },
        {
          kind: 'block',
          type: 'tennis',
        },
      ],
    },
    {
      kind: 'category',
      name: 'どうぐ',
      expanded: true,
      colour: 100,
      contents: [
        {
          kind: 'block',
          type: 'cooking',
        },
        {
          kind: 'block',
          type: 'frypan',
        },
        {
          kind: 'block',
          type: 'haburashi',
        },
        {
          kind: 'block',
          type: 'clock',
        },
        {
          kind: 'block',
          type: 'wake-up_watch',
        },
        {
          kind: 'block',
          type: 'smartphone',
        },
        {
          kind: 'block',
          type: 'note_pc',
        },
        {
          kind: 'block',
          type: 'tv',
        },
        {
          kind: 'block',
          type: 'hammer',
        },
        {
          kind: 'block',
          type: 'randoseru',
        },
        {
          kind: 'block',
          type: 'pencil',
        },
        {
          kind: 'block',
          type: 'book',
        },
        {
          kind: 'block',
          type: 'sketchbook',
        },
        {
          kind: 'block',
          type: 'pallet',
        },
        {
          kind: 'block',
          type: 'binder',
        },
        {
          kind: 'block',
          type: 'money1',
        },
        {
          kind: 'block',
          type: 'money2',
        },
        {
          kind: 'block',
          type: 'money3',
        },
        {
          kind: 'block',
          type: 'money4',
        },
        {
          kind: 'block',
          type: 'money5',
        },
        {
          kind: 'block',
          type: 'money6',
        },
        {
          kind: 'block',
          type: 'money7',
        },
        {
          kind: 'block',
          type: 'money8',
        },
      ],
    },
    {
      kind: 'category',
      name: 'のりもの',
      expanded: true,
      colour: 120,
      contents: [
        {
          kind: 'block',
          type: 'car',
        },
        {
          kind: 'block',
          type: 'bicycle',
        },
        {
          kind: 'block',
          type: 'train',
        },
        {
          kind: 'block',
          type: 'shinkansen',
        },
        {
          kind: 'block',
          type: 'airliner',
        },
      ],
    },
    {
      kind: 'category',
      name: 'かぐ',
      expanded: true,
      colour: 140,
      contents: [
        {
          kind: 'block',
          type: 'bed',
        },
        {
          kind: 'block',
          type: 'sofa',
        },
      ],
    },
    {
      kind: 'category',
      name: 'リアクション',
      expanded: true,
      colour: 160,
      contents: [
        {
          kind: 'block',
          type: 'hatena',
        },
        {
          kind: 'block',
          type: 'bikkuri',
        },
        {
          kind: 'block',
          type: 'zzz',
        },
        {
          kind: 'block',
          type: '8th_note',
        },
      ],
    },
    {
      kind: 'category',
      name: 'ばしょ',
      expanded: true,
      colour: 180,
      contents: [
        {
          kind: 'block',
          type: 'house',
        },
        {
          kind: 'block',
          type: 'building',
        },
        {
          kind: 'block',
          type: 'convini',
        },
        {
          kind: 'block',
          type: 'stadium_soccer',
        },
        {
          kind: 'block',
          type: 'stadium_baseball',
        },
        {
          kind: 'block',
          type: 'game_macine',
        },
        {
          kind: 'block',
          type: 'moon',
        },
      ],
    },
    {
      kind: 'category',
      name: 'ひと',
      expanded: true,
      colour: 200,
      contents: [
        {
          kind: 'block',
          type: 'suimin',
        },
        {
          kind: 'block',
          type: 'girl',
        },
        {
          kind: 'block',
          type: 'girl_back',
        },
        {
          kind: 'block',
          type: 'girl_front',
        },
        {
          kind: 'block',
          type: 'dancei',
        },
        {
          kind: 'block',
          type: 'teacher',
        },
        {
          kind: 'block',
          type: 'singer',
        },
        {
          kind: 'block',
          type: 'saxplayer_woman',
        },
      ],
    },
    {
      kind: 'category',
      name: 'エフェクト',
      expanded: true,
      colour: 220,
      contents: [
        {
          kind: 'block',
          type: 'kirakira',
        },
      ],
    },
    {
      kind: 'category',
      name: 'もの',
      expanded: true,
      colour: 240,
      contents: [
        {
          kind: 'block',
          type: 'kakedokei_an',
        },
      ],
    },
  ],
};
