const backgrounds = [
  {
    day: {
      condition: 'Sunny',
      background: '961e56a0fb193ee32c38cbd88399426cea37e8b91209ad02c33107184b9356be.jpg'
    },
    night: {
      condition: 'Clear',
      background: 'd2e5ccf1e67913df19b34a5c2a5dba169b473b9161c7500a4404ba48f41c0e34.jpg'
    }
  },
  {
    day: {
      condition: 'Partly Cloudy',
      background: '7cd5d61d97da04860ea783391b4682e034fe2cca6916960fd5a0a24802a6d6b8.jpg'
    },
    night: {
      condition: 'Partly Cloudy',
      background: '7cd5d61d97da04860ea783391b4682e034fe2cca6916960fd5a0a24802a6d6b8.jpg'
    }
  },
  {
    day: {
      condition: 'Cloudy',
      background: '2c1fd883d21c09c5def4c5a4c970ef72f4d45e165ee0e1065a6f3f535a4b775f.jpg'
    },
    night: {
      condition: 'Cloudy',
      background: '2c1fd883d21c09c5def4c5a4c970ef72f4d45e165ee0e1065a6f3f535a4b775f.jpg'
    }
  },
  {
    day: {
      condition: 'Overcast',
      background: '91e7b7ded74382210992f1a90e433fce1a07a69294f016434f80bbcc9d5c606d.jpg'
    },
    night: {
      condition: 'Overcast',
      background: '91e7b7ded74382210992f1a90e433fce1a07a69294f016434f80bbcc9d5c606d.jpg'
    }
  },
  {
    day: {
      condition: 'Mist',
      background: '9c6a542b66041042c4469b1a8201a8125b6b7d22159651e1a2c3e2ecbf186e67.jpg'
    },
    night: {
      condition: 'Mist',
      background: '9c6a542b66041042c4469b1a8201a8125b6b7d22159651e1a2c3e2ecbf186e67.jpg'
    }
  },
  {
    day: {
      condition: 'Patchy rain nearby',
      background: '794fae1a326fbad22241e8d41660b3d92da83e75b1357fc3d3c268ebb551a5c2.jpg'
    },
    night: {
      condition: 'Patchy rain nearby',
      background: '794fae1a326fbad22241e8d41660b3d92da83e75b1357fc3d3c268ebb551a5c2.jpg'
    }
  },
  {
    day: {
      condition: 'Patchy snow nearby',
      background: '5d1c8ae1e81bd7bd35061e4f95736b118d2e17b302f41604e521a386df58885c.jpg'
    },
    night: {
      condition: 'Patchy snow nearby',
      background: '5d1c8ae1e81bd7bd35061e4f95736b118d2e17b302f41604e521a386df58885c.jpg'
    }
  },
  {
    day: {
      condition: 'Patchy sleet nearby',
      background: 'ec37c08b2d35cbd48c8f9b14caeeb40df2688defb01af8f5e5f3cddd3e4ea596.jpg'
    },
    night: {
      condition: 'Patchy sleet nearby',
      background: 'ec37c08b2d35cbd48c8f9b14caeeb40df2688defb01af8f5e5f3cddd3e4ea596.jpg'
    }
  },
  {
    day: {
      condition: 'Patchy freezing drizzle nearby',
      background: 'ce5f4b215aab457c7c79598aefa37ff4035af53fbf31987e8e4f66f67952088e.jpg'
    },
    night: {
      condition: 'Patchy freezing drizzle nearby',
      background: 'ce5f4b215aab457c7c79598aefa37ff4035af53fbf31987e8e4f66f67952088e.jpg'
    }
  },
  {
    day: {
      condition: 'Thundery outbreaks in nearby',
      background: '6ecd7e89c1c0052ceb8ee6d0d50330c6211335b231a38caa96addb3096d77fdc.jpg'
    },
    night: {
      condition: 'Thundery outbreaks in nearby',
      background: '6ecd7e89c1c0052ceb8ee6d0d50330c6211335b231a38caa96addb3096d77fdc.jpg'
    }
  },
  {
    day: {
      condition: 'Blowing snow',
      background: '1dd060dfc1b0063353a43c4953448c75d2a6b91551b442512b3f157e25a4aecb.jpg'
    },
    night: {
      condition: 'Blowing snow',
      background: '1dd060dfc1b0063353a43c4953448c75d2a6b91551b442512b3f157e25a4aecb.jpg'
    }
  },
  {
    day: {
      condition: 'Blizzard',
      background: '092e407ce11aec18a2d1fa98bec549f8b9842529130c1e11141f1fb33dade0d9.jpg'
    },
    night: {
      condition: 'Blizzard',
      background: '092e407ce11aec18a2d1fa98bec549f8b9842529130c1e11141f1fb33dade0d9.jpg'
    }
  },
  {
    day: {
      condition: 'Fog',
      background: '308b23ab2b76a582300a7ab6af3a9ff565b022f4d17598d2f8fba1adde8a4299.jpg'
    },
    night: {
      condition: 'Fog',
      background: '308b23ab2b76a582300a7ab6af3a9ff565b022f4d17598d2f8fba1adde8a4299.jpg'
    }
  },
  {
    day: {
      condition: 'Freezing fog',
      background: 'f1d56e060b78504a6e6607404d7d99d619228702cf03e840cb19475b59392072.jpg'
    },
    night: {
      condition: 'Freezing fog',
      background: 'f1d56e060b78504a6e6607404d7d99d619228702cf03e840cb19475b59392072.jpg'
    }
  },
  {
    day: {
      condition: 'Patchy light drizzle',
      background: '8536ec994fa2bd1e467af344359e857dc43f8a5f5dbcd71e6cd5480ce80afb2a.jpg'
    },
    night: {
      condition: 'Patchy light drizzle',
      background: '8536ec994fa2bd1e467af344359e857dc43f8a5f5dbcd71e6cd5480ce80afb2a.jpg'
    }
  },
  {
    day: {
      condition: 'Light drizzle',
      background: '0a104c7ea4768ff228363a6e2928c47a2bdfc7e78d1c1a7a196cd90bee32b881.jpg'
    },
    night: {
      condition: 'Light drizzle',
      background: '0a104c7ea4768ff228363a6e2928c47a2bdfc7e78d1c1a7a196cd90bee32b881.jpg'
    }
  },
  {
    day: {
      condition: 'Freezing drizzle',
      background: 'fc47394886fdb291ad330795d5739d7a6d53c79121dbbe3bf5b395d4919bd506.jpg'
    },
    night: {
      condition: 'Freezing drizzle',
      background: 'fc47394886fdb291ad330795d5739d7a6d53c79121dbbe3bf5b395d4919bd506.jpg'
    }
  },
  {
    day: {
      condition: 'Heavy freezing drizzle',
      background: '8fb0b9fceca9356269497451df400d09e94c6e85d0dbc365c88d1367b7e0ca6d.jpg'
    },
    night: {
      condition: 'Heavy freezing drizzle',
      background: '8fb0b9fceca9356269497451df400d09e94c6e85d0dbc365c88d1367b7e0ca6d.jpg'
    }
  },
  {
    day: {
      condition: 'Patchy light rain',
      background: '2250da3d3151f8db311ef2feeb0d7759a9b3bddc4d2cad7415859c856cc0ad97.jpg'
    },
    night: {
      condition: 'Patchy light rain',
      background: '2250da3d3151f8db311ef2feeb0d7759a9b3bddc4d2cad7415859c856cc0ad97.jpg'
    }
  },
  {
    day: {
      condition: 'Light rain',
      background: 'dc38896317219f025496928aef1fce6942f8c6bddfcd0478237e57e8570a3bc7.jpg'
    },
    night: {
      condition: 'Light rain',
      background: 'dc38896317219f025496928aef1fce6942f8c6bddfcd0478237e57e8570a3bc7.jpg'
    }
  },
  {
    day: {
      condition: 'Moderate rain at times',
      background: 'b316acc48786108a93a68d49a29ce8b8f162c6f12ef2c6234ca36a5763891e44.jpg'
    },
    night: {
      condition: 'Moderate rain at times',
      background: 'b316acc48786108a93a68d49a29ce8b8f162c6f12ef2c6234ca36a5763891e44.jpg'
    }
  },
  {
    day: {
      condition: 'Moderate rain',
      background: '472e3cb5bd7ec274aee0ca5caa7cdd752d6fe5da68b9184a13f07376df406526.jpg'
    },
    night: {
      condition: 'Moderate rain',
      background: '472e3cb5bd7ec274aee0ca5caa7cdd752d6fe5da68b9184a13f07376df406526.jpg'
    }
  },
  {
    day: {
      condition: 'Heavy rain at times',
      background: '94a4385e662b5e484f028cf824ba970559f1fa67886f2ef78e82053b323b887b.jpg'
    },
    night: {
      condition: 'Heavy rain at times',
      background: '94a4385e662b5e484f028cf824ba970559f1fa67886f2ef78e82053b323b887b.jpg'
    }
  },
  {
    day: {
      condition: 'Heavy rain',
      background: '0b9bc6f396ce40f6c63bf5b61328881bf5b1abb4ba1f05d8b44b7270f31bd67e.jpg'
    },
    night: {
      condition: 'Heavy rain',
      background: '0b9bc6f396ce40f6c63bf5b61328881bf5b1abb4ba1f05d8b44b7270f31bd67e.jpg'
    }
  },
  {
    day: {
      condition: 'Light freezing rain',
      background: '7e8a85845ed7150b295cd894d25b32f5c76740051d2cf0ed20f3c83e838a6fab.jpg'
    },
    night: {
      condition: 'Light freezing rain',
      background: '7e8a85845ed7150b295cd894d25b32f5c76740051d2cf0ed20f3c83e838a6fab.jpg'
    }
  },
  {
    day: {
      condition: 'Moderate or heavy freezing rain',
      background: '720b7362b44edbf1f1020b2da1dd569a737692d65d73b0950e26255882daca60.jpg'
    },
    night: {
      condition: 'Moderate or heavy freezing rain',
      background: '720b7362b44edbf1f1020b2da1dd569a737692d65d73b0950e26255882daca60.jpg'
    }
  },
  {
    day: {
      condition: 'Light sleet',
      background: '57c318e99bba50cf174367a366a77744f96ffdaddaf31c4a40f6289a697d3812.jpg'
    },
    night: {
      condition: 'Light sleet',
      background: '57c318e99bba50cf174367a366a77744f96ffdaddaf31c4a40f6289a697d3812.jpg'
    }
  },
  {
    day: {
      condition: 'Moderate or heavy sleet',
      background: '24daba7579d32fe0f0a9c5cb2014a7d7b969287420320ba8fb44b1d4a35f6f26.jpg'
    },
    night: {
      condition: 'Moderate or heavy sleet',
      background: '24daba7579d32fe0f0a9c5cb2014a7d7b969287420320ba8fb44b1d4a35f6f26.jpg'
    }
  },
  {
    day: {
      condition: 'Patchy light snow',
      background: 'e16436d04d35f5dd3a202650334b8bfedc1ef9a498b81aa23e125a5ee72ee338.jpg'
    },
    night: {
      condition: 'Patchy light snow',
      background: 'e16436d04d35f5dd3a202650334b8bfedc1ef9a498b81aa23e125a5ee72ee338.jpg'
    }
  },
  {
    day: {
      condition: 'Light snow',
      background: 'ee1ae06b0a79a2ae25fcc510a1d37ef03efac3b64a9a67270df1a302963ec8c4.jpg'
    },
    night: {
      condition: 'Light snow',
      background: 'ee1ae06b0a79a2ae25fcc510a1d37ef03efac3b64a9a67270df1a302963ec8c4.jpg'
    }
  },
  {
    day: {
      condition: 'Patchy moderate snow',
      background: '00f92483d76ee9b4a477c586261d9e9a7fa8ffe002b55005a225247451e73dc8.jpg'
    },
    night: {
      condition: 'Patchy moderate snow',
      background: '00f92483d76ee9b4a477c586261d9e9a7fa8ffe002b55005a225247451e73dc8.jpg'
    }
  },
  {
    day: {
      condition: 'Moderate snow',
      background: 'ed5c5393b12d8fcc9a9d5fb0a7ae842b41973908ebb8f84fc2a98fd2b9138eab.jpg'
    },
    night: {
      condition: 'Moderate snow',
      background: 'ed5c5393b12d8fcc9a9d5fb0a7ae842b41973908ebb8f84fc2a98fd2b9138eab.jpg'
    }
  },
  {
    day: {
      condition: 'Patchy heavy snow',
      background: 'd755e12d6dc9667ecfc8bc9552ce13dec44cda0ddc7dbe39c65a61fecdaae498.jpg'
    },
    night: {
      condition: 'Patchy heavy snow',
      background: 'd755e12d6dc9667ecfc8bc9552ce13dec44cda0ddc7dbe39c65a61fecdaae498.jpg'
    }
  },
  {
    day: {
      condition: 'Heavy snow',
      background: 'c3ac90e0c1d7ebea7b9040d80647606a0f657f4b8eb6d4a512cc2ff02e1628a2.jpg'
    },
    night: {
      condition: 'Heavy snow',
      background: 'c3ac90e0c1d7ebea7b9040d80647606a0f657f4b8eb6d4a512cc2ff02e1628a2.jpg'
    }
  },
  {
    day: {
      condition: 'Ice pellets',
      background: 'c201e1b858609f803f4b245568e75e4f9936f3a06674e086eea224632055b807.jpg'
    },
    night: {
      condition: 'Ice pellets',
      background: 'c201e1b858609f803f4b245568e75e4f9936f3a06674e086eea224632055b807.jpg'
    }
  },
  {
    day: {
      condition: 'Light rain shower',
      background: '8d419bb462c0ecce2a1289fbe210340825d6f4e2862a59ee2f6debddbed814e2.jpg'
    },
    night: {
      condition: 'Light rain shower',
      background: '8d419bb462c0ecce2a1289fbe210340825d6f4e2862a59ee2f6debddbed814e2.jpg'
    }
  },
  {
    day: {
      condition: 'Moderate or heavy rain shower',
      background: '6581937821a90f15aadea4140f101fa3c12b18a12dbc51930fea9d94edeac1a3.jpg'
    },
    night: {
      condition: 'Moderate or heavy rain shower',
      background: '6581937821a90f15aadea4140f101fa3c12b18a12dbc51930fea9d94edeac1a3.jpg'
    }
  },
  {
    day: {
      condition: 'Torrential rain shower',
      background: '89d23a463179d03d64d0b95f5618e94d59212f6a2914a6788b9d66e1d044d980.jpg'
    },
    night: {
      condition: 'Torrential rain shower',
      background: '89d23a463179d03d64d0b95f5618e94d59212f6a2914a6788b9d66e1d044d980.jpg'
    }
  },
  {
    day: {
      condition: 'Light sleet showers',
      background: 'd676c19b11dee2d27562a313c69a0345a87acb87f56d75c1faa78a4726c717b2.jpg'
    },
    night: {
      condition: 'Light sleet showers',
      background: 'd676c19b11dee2d27562a313c69a0345a87acb87f56d75c1faa78a4726c717b2.jpg'
    }
  },
  {
    day: {
      condition: 'Moderate or heavy sleet showers',
      background: 'b43630fbaf45dc47ff7c1edc88c166a4ca3a582103afcb5d5cd9adef1048bb78.jpg'
    },
    night: {
      condition: 'Moderate or heavy sleet showers',
      background: 'b43630fbaf45dc47ff7c1edc88c166a4ca3a582103afcb5d5cd9adef1048bb78.jpg'
    }
  },
  {
    day: {
      condition: 'Light snow showers',
      background: 'f3c57b410cfc6dbd3b9cec1a36b080501a9e4d159dcaa2b81da1c7b8ee164817.jpg'
    },
    night: {
      condition: 'Light snow showers',
      background: 'f3c57b410cfc6dbd3b9cec1a36b080501a9e4d159dcaa2b81da1c7b8ee164817.jpg'
    }
  },
  {
    day: {
      condition: 'Moderate or heavy snow showers',
      background: '23a7424ab1e170086419f168a0fad0c16c0ab80fbd9e2ff702237f2d95df43fd.jpg'
    },
    night: {
      condition: 'Moderate or heavy snow showers',
      background: '23a7424ab1e170086419f168a0fad0c16c0ab80fbd9e2ff702237f2d95df43fd.jpg'
    }
  },
  {
    day: {
      condition: 'Light showers of ice pellets',
      background: '9ee5b8fecca66de2f773d8fb6e54ceaa3d51fdee8d80e3a633aadc4ca58abacc.jpg'
    },
    night: {
      condition: 'Light showers of ice pellets',
      background: '9ee5b8fecca66de2f773d8fb6e54ceaa3d51fdee8d80e3a633aadc4ca58abacc.jpg'
    }
  },
  {
    day: {
      condition: 'Moderate or heavy showers of ice pellets',
      background: '370ee77685e9529a191c9507edd3ac0463115d18d931d36ec21435783728ff79.jpg'
    },
    night: {
      condition: 'Moderate or heavy showers of ice pellets',
      background: '370ee77685e9529a191c9507edd3ac0463115d18d931d36ec21435783728ff79.jpg'
    }
  },
  {
    day: {
      condition: 'Patchy light rain in area with thunder',
      background: 'c0b9b549442123abd6ea2df281e018519578414e916d53d8306ea00f9ec8e9ed.jpg'
    },
    night: {
      condition: 'Patchy light rain in area with thunder',
      background: 'c0b9b549442123abd6ea2df281e018519578414e916d53d8306ea00f9ec8e9ed.jpg'
    }
  },
  {
    day: {
      condition: 'Moderate or heavy rain in area with thunder',
      background: '9b3d84db949b89ed8030934a41d51cf4b9bdd8334d968e1a93c25a78c6bf2219.jpg'
    },
    night: {
      condition: 'Moderate or heavy rain in area with thunder',
      background: '9b3d84db949b89ed8030934a41d51cf4b9bdd8334d968e1a93c25a78c6bf2219.jpg'
    }
  },
  {
    day: {
      condition: 'Patchy light snow in area with thunder',
      background: '5c91cbef93079a54140501a505f948cd695f750657758722a1856d5d96d427b7.jpg'
    },
    night: {
      condition: 'Patchy light snow in area with thunder',
      background: '5c91cbef93079a54140501a505f948cd695f750657758722a1856d5d96d427b7.jpg'
    }
  },
  {
    day: {
      condition: 'Moderate or heavy snow in area with thunder',
      background: '3886c644987543fe1b81b0ba6b23ebc37421059f7ebb193cc49e0f1018077e28.jpg'
    },
    night: {
      condition: 'Moderate or heavy snow in area with thunder',
      background: '3886c644987543fe1b81b0ba6b23ebc37421059f7ebb193cc49e0f1018077e28.jpg'
    }
  }
]

export default backgrounds
