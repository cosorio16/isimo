let objects = [
  {
    name: "Entrada_ON/OFF",
    address: "1/0/1",
  },
  {
    name: "Intermedio_ON/OFF",
    address: "1/0/2",
  },
  {
    name: "Fondo_ON/OFF",
    address: "1/0/3",
  },
  {
    name: "Nevera Gaseosa agua_ON/OFF",
    address: "1/0/4",
  },
  {
    name: "Aviso_ON/OFF",
    address: "1/0/5",
  },
  {
    name: "Reflectores_ON/OFF",
    address: "1/0/6",
  },
  {
    name: "Entrada_RS_ON/OFF",
    address: "1/1/1",
  },
  {
    name: "Intermedio_RS_ON/OFF",
    address: "1/1/2",
  },
  {
    name: "Fondo_RS_ON/OFF",
    address: "1/1/3",
  },
  {
    name: "Nevera Gaseosa agua_RS_ON/OFF",
    address: "1/1/4",
  },
  {
    name: "Aviso_RS_ON/OFF",
    address: "1/1/5",
  },
  {
    name: "Reflectores_RS_ON/OFF",
    address: "1/1/6",
  },
  {
    name: "Entrada_RS_BLOQUEO",
    address: "1/2/1",
  },
  {
    name: "Intermedio_RS_BLOQUEO",
    address: "1/2/2",
  },
  {
    name: "Fondo_RS_BLOQUEO",
    address: "1/2/3",
  },
  {
    name: "Nevera Gaseosa agua_RS_BLOQUEO",
    address: "1/2/4",
  },
  {
    name: "Aviso_RS_BLOQUEO",
    address: "1/2/5",
  },
  {
    name: "Reflectores_RS_BLOQUEO",
    address: "1/2/6",
  },
  {
    name: "Entrada_TI_FUN",
    address: "1/3/1",
  },
  {
    name: "Intermedio_TI_FUN",
    address: "1/3/2",
  },
  {
    name: "Fondo_TI_FUN",
    address: "1/3/3",
  },
  {
    name: "Nevera Gaseosa agua_TI_FUN",
    address: "1/3/4",
  },
  {
    name: "Aviso_TI_FUN",
    address: "1/3/5",
  },
  {
    name: "Reflectores_TI_FUN",
    address: "1/3/6",
  },
  {
    name: "Señal selector AUTO Entrada luces",
    address: "2/0/1",
  },
  {
    name: "Señal selector AUTO Intermedio Luces",
    address: "2/0/2",
  },
  {
    name: "Señal selector AUTO Fondo Luces",
    address: "2/0/3",
  },
  {
    name: "Señal selector AUTO Nevera Gaseosa agua",
    address: "2/0/4",
  },
  {
    name: "Señal selector AUTO Aviso",
    address: "2/0/5",
  },
  {
    name: "Señal selector AUTO Reflectores",
    address: "2/0/6",
  },
  {
    name: "Señal selector AUTO Aire acondicionado # 1 Entrada",
    address: "2/0/7",
  },
  {
    name: "Señal selector AUTO Aire acondicionado # 2 Intermedio",
    address: "2/0/8",
  },
  {
    name: "Señal selector AUTO Aire acondicionado # 2 Fondo",
    address: "2/0/9",
  },
  {
    name: "Temperatura del recinto",
    address: "2/1/1",
  },
  {
    name: "ON AACC  #1 Entrada",
    address: "3/0/1",
  },
  {
    name: "OFF AACC  #1 Entrada",
    address: "3/0/2",
  },
  {
    name: "16°C AACC #1 Entrada",
    address: "3/0/5",
  },
  {
    name: "17°C AACC #1 Entrada",
    address: "3/0/6",
  },
  {
    name: "18°C AACC #1 Entrada",
    address: "3/0/7",
  },
  {
    name: "19°C AACC #1 Entrada",
    address: "3/0/8",
  },
  {
    name: "20°C AACC #1 Entrada",
    address: "3/0/9",
  },
  {
    name: "21°C AACC #1 Entrada",
    address: "3/0/10",
  },
  {
    name: "22°C AACC #1 Entrada",
    address: "3/0/11",
  },
  {
    name: "23°C AACC #1 Entrada",
    address: "3/0/12",
  },
  {
    name: "24°C AACC #1 Entrada",
    address: "3/0/13",
  },
  {
    name: "25°C AACC #1 Entrada",
    address: "3/0/14",
  },
  {
    name: "26°C AACC #1 Entrada",
    address: "3/0/15",
  },
  {
    name: "27°C AACC #1 Entrada",
    address: "3/0/16",
  },
  {
    name: "28°C AACC #1 Entrada",
    address: "3/0/17",
  },
  {
    name: "29°C AACC #1 Entrada",
    address: "3/0/18",
  },
  {
    name: "30°C AACC #1 Entrada",
    address: "3/0/19",
  },
  {
    name: "31°C AACC #1 Entrada",
    address: "3/0/20",
  },
  {
    name: "32°C AACC #1 Entrada",
    address: "3/0/21",
  },
  {
    name: "Contactor Potencia #1 Entrada",
    address: "3/0/22",
  },
  {
    name: "RS_Contactor Potencia #1 Entrada",
    address: "3/0/23",
  },
  {
    name: "ON/OFF AACC  #1 Entrada General",
    address: "3/0/24",
  },
  {
    name: "TEMPERATURA AACC  #1 Entrada  General",
    address: "3/0/25",
  },
  {
    name: "ON AACC #2 Mitad",
    address: "3/1/1",
  },
  {
    name: "OFF AACC #2 Mitad",
    address: "3/1/2",
  },
  {
    name: "16°C AACC #2 Mitad",
    address: "3/1/5",
  },
  {
    name: "17°C AACC #2 Mitad",
    address: "3/1/6",
  },
  {
    name: "18°C AACC #2 Mitad",
    address: "3/1/7",
  },
  {
    name: "19°C AACC #2 Mitad",
    address: "3/1/8",
  },
  {
    name: "20°C AACC #2 Mitad",
    address: "3/1/9",
  },
  {
    name: "21°C AACC #2 Mitad",
    address: "3/1/10",
  },
  {
    name: "22°C AACC #2 Mitad",
    address: "3/1/11",
  },
  {
    name: "23°C AACC #2 Mitad",
    address: "3/1/12",
  },
  {
    name: "24°C AACC #2 Mitad",
    address: "3/1/13",
  },
  {
    name: "25°C AACC #2 Mitad",
    address: "3/1/14",
  },
  {
    name: "26°C AACC #2 Mitad",
    address: "3/1/15",
  },
  {
    name: "27°C AACC #2 Mitad",
    address: "3/1/16",
  },
  {
    name: "28°C AACC #2 Mitad",
    address: "3/1/17",
  },
  {
    name: "29°C AACC #2 Mitad",
    address: "3/1/18",
  },
  {
    name: "30°C AACC #2 Mitad",
    address: "3/1/19",
  },
  {
    name: "31°C AACC #2 Mitad",
    address: "3/1/20",
  },
  {
    name: "32°C AACC #2 Mitad",
    address: "3/1/21",
  },
  {
    name: "Contactor Potencia #2 Mitad",
    address: "3/1/22",
  },
  {
    name: "RS_Contactor Potencia #2 Mitad",
    address: "3/1/23",
  },
  {
    name: "ON/OFF AACC  #2 Mitad General",
    address: "3/1/24",
  },
  {
    name: "TEMPERATURA AACC  #2 Mitad General",
    address: "3/1/25",
  },
  {
    name: "ON AACC #3 Fondo",
    address: "3/2/1",
  },
  {
    name: "OFF AACC #3 Fondo",
    address: "3/2/2",
  },
  {
    name: "16°C AACC #3 Fondo",
    address: "3/2/5",
  },
  {
    name: "17°C AACC #3 Fondo",
    address: "3/2/6",
  },
  {
    name: "18°C AACC #3 Fondo",
    address: "3/2/7",
  },
  {
    name: "19°C AACC #3 Fondo",
    address: "3/2/8",
  },
  {
    name: "20°C AACC #3 Fondo",
    address: "3/2/9",
  },
  {
    name: "21°C AACC #3 Fondo",
    address: "3/2/10",
  },
  {
    name: "22°C AACC #3 Fondo",
    address: "3/2/11",
  },
  {
    name: "23°C AACC #3 Fondo",
    address: "3/2/12",
  },
  {
    name: "24°C AACC #3 Fondo",
    address: "3/2/13",
  },
  {
    name: "25°C AACC #3 Fondo",
    address: "3/2/14",
  },
  {
    name: "26°C AACC #3 Fondo",
    address: "3/2/15",
  },
  {
    name: "27°C AACC #3 Fondo",
    address: "3/2/16",
  },
  {
    name: "28°C AACC #3 Fondo",
    address: "3/2/17",
  },
  {
    name: "29°C AACC #3 Fondo",
    address: "3/2/18",
  },
  {
    name: "30°C AACC #3 Fondo",
    address: "3/2/19",
  },
  {
    name: "31°C AACC #3 Fondo",
    address: "3/2/20",
  },
  {
    name: "32°C AACC #3 Fondo",
    address: "3/2/21",
  },
  {
    name: "Contactor Potencia #3 Fondo",
    address: "3/2/22",
  },
  {
    name: "RS_Contactor Potencia #3 Fondo",
    address: "3/2/23",
  },
  {
    name: "ON/OFF AACC  #3 Fondo General",
    address: "3/2/24",
  },
  {
    name: "TEMPERATURA AACC  #3 Fondo General",
    address: "3/2/25",
  },
  {
    name: "Medidor de energia - Voltaje Fase A #1",
    address: "33/0/1",
  },
  {
    name: "Medidor de energia - Voltaje Fase B #1",
    address: "33/0/2",
  },
  {
    name: "Medidor de energia - Voltaje Fase C #1",
    address: "33/0/3",
  },
  {
    name: "Medidor de energia - Frecuencia",
    address: "33/0/4",
  },
  {
    name: "Medidor de energia - Corriente A, Circuito 1",
    address: "33/0/5",
  },
  {
    name: "Medidor de energia - Corriente B, Circuito 1",
    address: "33/0/6",
  },
  {
    name: "Medidor de energia - Corriente A, Circuito 2",
    address: "33/0/7",
  },
  {
    name: "Medidor de energia - Corriente B, Circuito 2",
    address: "33/0/8",
  },
  {
    name: "Medidor de energia - Corriente C, Circuito 2",
    address: "33/0/9",
  },
  {
    name: "Medidor de energia - Corriente A, Circuito 3",
    address: "33/0/10",
  },
  {
    name: "Medidor de energia - Corriente B, Circuito 3",
    address: "33/0/11",
  },
  {
    name: "Medidor de energia - Corriente C, Circuito 3",
    address: "33/0/12",
  },
  {
    name: "Medidor de energia - Corriente A, Circuito 4",
    address: "33/0/13",
  },
  {
    name: "Medidor de energia - Corriente B, Circuito 4",
    address: "33/0/14",
  },
  {
    name: "Medidor de energia - Corriente C, Circuito 4",
    address: "33/0/15",
  },
  {
    name: "Medidor de energia - Potencia A, Circuito 1",
    address: "33/0/16",
  },
  {
    name: "Medidor de energia - Potencia B, Circuito 1",
    address: "33/0/17",
  },
  {
    name: "Medidor de energia - Potencia C, Circuito 1",
    address: "33/0/18",
  },
  {
    name: "Medidor de energia - Potencia A, Circuito 2",
    address: "33/0/19",
  },
  {
    name: "Medidor de energia - Potencia B, Circuito 2",
    address: "33/0/20",
  },
  {
    name: "Medidor de energia - Potencia C, Circuito 2",
    address: "33/0/21",
  },
  {
    name: "Medidor de energia - Potencia A, Circuito 3",
    address: "33/0/22",
  },
  {
    name: "Medidor de energia - Potencia B, Circuito 3",
    address: "33/0/23",
  },
  {
    name: "Medidor de energia - Potencia C, Circuito 3",
    address: "33/0/24",
  },
  {
    name: "Medidor de energia - Potencia A, Circuito 4",
    address: "33/0/25",
  },
  {
    name: "Medidor de energia - Potencia B, Circuito 4",
    address: "33/0/26",
  },
  {
    name: "Medidor de energia - Potencia C, Circuito 4",
    address: "33/0/27",
  },
  {
    name: "Medidor de energia - Potencia Total, Circuito 1",
    address: "33/0/28",
  },
  {
    name: "Medidor de energia - Potencia Total, Circuito 2",
    address: "33/0/29",
  },
  {
    name: "Medidor de energia - Potencia Total, Circuito 3",
    address: "33/0/30",
  },
  {
    name: "Medidor de energia - Potencia Total, Circuito 4",
    address: "33/0/31",
  },
  {
    name: "Medidor de energia - Potencia Reactiva A, Circuito 1",
    address: "33/0/32",
  },
  {
    name: "Medidor de energia - Potencia Reactiva B, Circuito 1",
    address: "33/0/33",
  },
  {
    name: "Medidor de energia - Potencia Reactiva C, Circuito 1",
    address: "33/0/34",
  },
  {
    name: "Medidor de energia - Potencia Reactiva A, Circuito 2",
    address: "33/0/35",
  },
  {
    name: "Medidor de energia - Potencia Reactiva B, Circuito 2",
    address: "33/0/36",
  },
  {
    name: "Medidor de energia - Potencia Reactiva C, Circuito 2",
    address: "33/0/37",
  },
  {
    name: "Medidor de energia - Potencia Reactiva A, Circuito 3",
    address: "33/0/38",
  },
  {
    name: "Medidor de energia - Potencia Reactiva B, Circuito 3",
    address: "33/0/39",
  },
  {
    name: "Medidor de energia - Potencia Reactiva C, Circuito 3",
    address: "33/0/40",
  },
  {
    name: "Medidor de energia - Potencia Reactiva A, Circuito 4",
    address: "33/0/41",
  },
  {
    name: "Medidor de energia - Potencia Reactiva B, Circuito 4",
    address: "33/0/42",
  },
  {
    name: "Medidor de energia - Potencia Reactiva C, Circuito 4",
    address: "33/0/43",
  },
  {
    name: "Medidor de energia - Potencia Reactiva Total, Circuito 1",
    address: "33/0/44",
  },
  {
    name: "Medidor de energia - Potencia Reactiva Total, Circuito 2",
    address: "33/0/45",
  },
  {
    name: "Medidor de energia - Potencia Reactiva Total, Circuito 3",
    address: "33/0/46",
  },
  {
    name: "Medidor de energia - Potencia Reactiva Total, Circuito 4",
    address: "33/0/47",
  },
  {
    name: "Medidor de energia - Factor de Potencia A, Circuito 1",
    address: "33/0/48",
  },
  {
    name: "Medidor de energia - Factor de Potencia B, Circuito 1",
    address: "33/0/49",
  },
  {
    name: "Medidor de energia - Factor de Potencia C, Circuito 1",
    address: "33/0/50",
  },
  {
    name: "Medidor de energia - Factor de Potencia A, Circuito 2",
    address: "33/0/51",
  },
  {
    name: "Medidor de energia - Factor de Potencia B, Circuito 2",
    address: "33/0/52",
  },
  {
    name: "Medidor de energia - Factor de Potencia C, Circuito 2",
    address: "33/0/53",
  },
  {
    name: "Medidor de energia - Factor de Potencia A, Circuito 3",
    address: "33/0/54",
  },
  {
    name: "Medidor de energia - Factor de Potencia B, Circuito 3",
    address: "33/0/55",
  },
  {
    name: "Medidor de energia - Factor de Potencia C, Circuito 3",
    address: "33/0/56",
  },
  {
    name: "Medidor de energia - Factor de Potencia A, Circuito 4",
    address: "33/0/57",
  },
  {
    name: "Medidor de energia - Factor de Potencia B, Circuito 4",
    address: "33/0/58",
  },
  {
    name: "Medidor de energia - Factor de Potencia C, Circuito 4",
    address: "33/0/59",
  },
  {
    name: "Medidor de energia - Factor de Potencia Total, Circuito 1",
    address: "33/0/60",
  },
  {
    name: "Medidor de energia - Factor de Potencia Total, Circuito 2",
    address: "33/0/61",
  },
  {
    name: "Medidor de energia - Factor de Potencia Total, Circuito 3",
    address: "33/0/62",
  },
  {
    name: "Medidor de energia - Factor de Potencia Total, Circuito 4",
    address: "33/0/63",
  },
  {
    name: "Medidor de energia - Potencia Aparente A, Circuito 1",
    address: "33/0/64",
  },
  {
    name: "Medidor de energia - Potencia Aparente B, Circuito 1",
    address: "33/0/65",
  },
  {
    name: "Medidor de energia - Potencia Aparente C, Circuito 1",
    address: "33/0/66",
  },
  {
    name: "Medidor de energia - Potencia Aparente A, Circuito 2",
    address: "33/0/67",
  },
  {
    name: "Medidor de energia - Potencia Aparente B, Circuito 2",
    address: "33/0/68",
  },
  {
    name: "Medidor de energia - Potencia Aparente C, Circuito 2",
    address: "33/0/69",
  },
  {
    name: "Medidor de energia - Potencia Aparente A, Circuito 3",
    address: "33/0/70",
  },
  {
    name: "Medidor de energia - Potencia Aparente B, Circuito 3",
    address: "33/0/71",
  },
  {
    name: "Medidor de energia - Potencia Aparente C, Circuito 3",
    address: "33/0/72",
  },
  {
    name: "Medidor de energia - Potencia Aparente A, Circuito 4",
    address: "33/0/73",
  },
  {
    name: "Medidor de energia - Potencia Aparente B, Circuito 4",
    address: "33/0/74",
  },
  {
    name: "Medidor de energia - Potencia Aparente C, Circuito 4",
    address: "33/0/75",
  },
  {
    name: "Medidor de energia - Potencia Aparente Total, Circuito 1",
    address: "33/0/76",
  },
  {
    name: "Medidor de energia - Potencia Aparente Total, Circuito 2",
    address: "33/0/77",
  },
  {
    name: "Medidor de energia - Potencia Aparente Total, Circuito 3",
    address: "33/0/78",
  },
  {
    name: "Medidor de energia - Potencia Aparente Total, Circuito 4",
    address: "33/0/79",
  },
  {
    name: "Medidor de energia - Energia Fase A, Circuito 1",
    address: "33/0/80",
  },
  {
    name: "Medidor de energia - Energia Fase B, Circuito 1",
    address: "33/0/81",
  },
  {
    name: "Medidor de energia - Energia Fase C, Circuito 1",
    address: "33/0/82",
  },
  {
    name: "Medidor de energia - Energia Fase A, Circuito 2",
    address: "33/0/83",
  },
  {
    name: "Medidor de energia - Energia Fase B, Circuito 2",
    address: "33/0/84",
  },
  {
    name: "Medidor de energia - Energia Fase C, Circuito 2",
    address: "33/0/85",
  },
  {
    name: "Medidor de energia - Energia Fase A, Circuito 3",
    address: "33/0/86",
  },
  {
    name: "Medidor de energia - Energia Fase B, Circuito 3",
    address: "33/0/87",
  },
  {
    name: "Medidor de energia - Energia Fase C, Circuito 3",
    address: "33/0/88",
  },
  {
    name: "Medidor de energia - Energia Fase A, Circuito 4",
    address: "33/0/89",
  },
  {
    name: "Medidor de energia - Energia Fase B, Circuito 4",
    address: "33/0/90",
  },
  {
    name: "Medidor de energia - Energia Fase C, Circuito 4",
    address: "33/0/91",
  },
  {
    name: "Medidor de energia - Energia Total, Circuito 1",
    address: "33/0/92",
  },
  {
    name: "Medidor de energia - Energia Total, Circuito 2",
    address: "33/0/93",
  },
  {
    name: "Medidor de energia - Energia Total, Circuito 3",
    address: "33/0/94",
  },
  {
    name: "Medidor de energia - Energia Total, Circuito 4",
    address: "33/0/95",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase A, Circuito 1",
    address: "33/0/96",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase B, Circuito 1",
    address: "33/0/97",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase C, Circuito 1",
    address: "33/0/98",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase A, Circuito 2",
    address: "33/0/99",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase B, Circuito 2",
    address: "33/0/100",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase C, Circuito 2",
    address: "33/0/101",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase A, Circuito 3",
    address: "33/0/102",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase B, Circuito 3",
    address: "33/0/103",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase C, Circuito 3",
    address: "33/0/104",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase A, Circuito 4",
    address: "33/0/105",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase B, Circuito 4",
    address: "33/0/106",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase C, Circuito 4",
    address: "33/0/107",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Total, Circuito 1",
    address: "33/0/108",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Total, Circuito 2",
    address: "33/0/109",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Total, Circuito 3",
    address: "33/0/110",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Total, Circuito 4",
    address: "33/0/111",
  },
  {
    name: "Medidor de energia - Direccion de Comunicacion",
    address: "33/0/112",
  },
  {
    name: "Medidor de energia - Tasa de Baudio",
    address: "33/0/113",
  },
  {
    name: "Medidor de energia - CT Primaria",
    address: "33/0/114",
  },
  {
    name: "Medidor de energia - Reset Energia",
    address: "33/0/115",
  },
  {
    name: "Medidor de energia - Corriente C, Circuito 1",
    address: "33/0/116",
  },
];

let medidor = [
  {
    name: "Medidor de energia - Voltaje Fase A #1",
    address: "33/0/1",
  },
  {
    name: "Medidor de energia - Voltaje Fase B #1",
    address: "33/0/2",
  },
  {
    name: "Medidor de energia - Voltaje Fase C #1",
    address: "33/0/3",
  },
  {
    name: "Medidor de energia - Frecuencia",
    address: "33/0/4",
  },
  {
    name: "Medidor de energia - Corriente A, Circuito 1",
    address: "33/0/5",
  },
  {
    name: "Medidor de energia - Corriente B, Circuito 1",
    address: "33/0/6",
  },
  {
    name: "Medidor de energia - Corriente A, Circuito 2",
    address: "33/0/7",
  },
  {
    name: "Medidor de energia - Corriente B, Circuito 2",
    address: "33/0/8",
  },
  {
    name: "Medidor de energia - Corriente C, Circuito 2",
    address: "33/0/9",
  },
  {
    name: "Medidor de energia - Corriente A, Circuito 3",
    address: "33/0/10",
  },
  {
    name: "Medidor de energia - Corriente B, Circuito 3",
    address: "33/0/11",
  },
  {
    name: "Medidor de energia - Corriente C, Circuito 3",
    address: "33/0/12",
  },
  {
    name: "Medidor de energia - Corriente A, Circuito 4",
    address: "33/0/13",
  },
  {
    name: "Medidor de energia - Corriente B, Circuito 4",
    address: "33/0/14",
  },
  {
    name: "Medidor de energia - Corriente C, Circuito 4",
    address: "33/0/15",
  },
  {
    name: "Medidor de energia - Potencia A, Circuito 1",
    address: "33/0/16",
  },
  {
    name: "Medidor de energia - Potencia B, Circuito 1",
    address: "33/0/17",
  },
  {
    name: "Medidor de energia - Potencia C, Circuito 1",
    address: "33/0/18",
  },
  {
    name: "Medidor de energia - Potencia A, Circuito 2",
    address: "33/0/19",
  },
  {
    name: "Medidor de energia - Potencia B, Circuito 2",
    address: "33/0/20",
  },
  {
    name: "Medidor de energia - Potencia C, Circuito 2",
    address: "33/0/21",
  },
  {
    name: "Medidor de energia - Potencia A, Circuito 3",
    address: "33/0/22",
  },
  {
    name: "Medidor de energia - Potencia B, Circuito 3",
    address: "33/0/23",
  },
  {
    name: "Medidor de energia - Potencia C, Circuito 3",
    address: "33/0/24",
  },
  {
    name: "Medidor de energia - Potencia A, Circuito 4",
    address: "33/0/25",
  },
  {
    name: "Medidor de energia - Potencia B, Circuito 4",
    address: "33/0/26",
  },
  {
    name: "Medidor de energia - Potencia C, Circuito 4",
    address: "33/0/27",
  },
  {
    name: "Medidor de energia - Potencia Total, Circuito 1",
    address: "33/0/28",
  },
  {
    name: "Medidor de energia - Potencia Total, Circuito 2",
    address: "33/0/29",
  },
  {
    name: "Medidor de energia - Potencia Total, Circuito 3",
    address: "33/0/30",
  },
  {
    name: "Medidor de energia - Potencia Total, Circuito 4",
    address: "33/0/31",
  },
  {
    name: "Medidor de energia - Potencia Reactiva A, Circuito 1",
    address: "33/0/32",
  },
  {
    name: "Medidor de energia - Potencia Reactiva B, Circuito 1",
    address: "33/0/33",
  },
  {
    name: "Medidor de energia - Potencia Reactiva C, Circuito 1",
    address: "33/0/34",
  },
  {
    name: "Medidor de energia - Potencia Reactiva A, Circuito 2",
    address: "33/0/35",
  },
  {
    name: "Medidor de energia - Potencia Reactiva B, Circuito 2",
    address: "33/0/36",
  },
  {
    name: "Medidor de energia - Potencia Reactiva C, Circuito 2",
    address: "33/0/37",
  },
  {
    name: "Medidor de energia - Potencia Reactiva A, Circuito 3",
    address: "33/0/38",
  },
  {
    name: "Medidor de energia - Potencia Reactiva B, Circuito 3",
    address: "33/0/39",
  },
  {
    name: "Medidor de energia - Potencia Reactiva C, Circuito 3",
    address: "33/0/40",
  },
  {
    name: "Medidor de energia - Potencia Reactiva A, Circuito 4",
    address: "33/0/41",
  },
  {
    name: "Medidor de energia - Potencia Reactiva B, Circuito 4",
    address: "33/0/42",
  },
  {
    name: "Medidor de energia - Potencia Reactiva C, Circuito 4",
    address: "33/0/43",
  },
  {
    name: "Medidor de energia - Potencia Reactiva Total, Circuito 1",
    address: "33/0/44",
  },
  {
    name: "Medidor de energia - Potencia Reactiva Total, Circuito 2",
    address: "33/0/45",
  },
  {
    name: "Medidor de energia - Potencia Reactiva Total, Circuito 3",
    address: "33/0/46",
  },
  {
    name: "Medidor de energia - Potencia Reactiva Total, Circuito 4",
    address: "33/0/47",
  },
  {
    name: "Medidor de energia - Factor de Potencia A, Circuito 1",
    address: "33/0/48",
  },
  {
    name: "Medidor de energia - Factor de Potencia B, Circuito 1",
    address: "33/0/49",
  },
  {
    name: "Medidor de energia - Factor de Potencia C, Circuito 1",
    address: "33/0/50",
  },
  {
    name: "Medidor de energia - Factor de Potencia A, Circuito 2",
    address: "33/0/51",
  },
  {
    name: "Medidor de energia - Factor de Potencia B, Circuito 2",
    address: "33/0/52",
  },
  {
    name: "Medidor de energia - Factor de Potencia C, Circuito 2",
    address: "33/0/53",
  },
  {
    name: "Medidor de energia - Factor de Potencia A, Circuito 3",
    address: "33/0/54",
  },
  {
    name: "Medidor de energia - Factor de Potencia B, Circuito 3",
    address: "33/0/55",
  },
  {
    name: "Medidor de energia - Factor de Potencia C, Circuito 3",
    address: "33/0/56",
  },
  {
    name: "Medidor de energia - Factor de Potencia A, Circuito 4",
    address: "33/0/57",
  },
  {
    name: "Medidor de energia - Factor de Potencia B, Circuito 4",
    address: "33/0/58",
  },
  {
    name: "Medidor de energia - Factor de Potencia C, Circuito 4",
    address: "33/0/59",
  },
  {
    name: "Medidor de energia - Factor de Potencia Total, Circuito 1",
    address: "33/0/60",
  },
  {
    name: "Medidor de energia - Factor de Potencia Total, Circuito 2",
    address: "33/0/61",
  },
  {
    name: "Medidor de energia - Factor de Potencia Total, Circuito 3",
    address: "33/0/62",
  },
  {
    name: "Medidor de energia - Factor de Potencia Total, Circuito 4",
    address: "33/0/63",
  },
  {
    name: "Medidor de energia - Potencia Aparente A, Circuito 1",
    address: "33/0/64",
  },
  {
    name: "Medidor de energia - Potencia Aparente B, Circuito 1",
    address: "33/0/65",
  },
  {
    name: "Medidor de energia - Potencia Aparente C, Circuito 1",
    address: "33/0/66",
  },
  {
    name: "Medidor de energia - Potencia Aparente A, Circuito 2",
    address: "33/0/67",
  },
  {
    name: "Medidor de energia - Potencia Aparente B, Circuito 2",
    address: "33/0/68",
  },
  {
    name: "Medidor de energia - Potencia Aparente C, Circuito 2",
    address: "33/0/69",
  },
  {
    name: "Medidor de energia - Potencia Aparente A, Circuito 3",
    address: "33/0/70",
  },
  {
    name: "Medidor de energia - Potencia Aparente B, Circuito 3",
    address: "33/0/71",
  },
  {
    name: "Medidor de energia - Potencia Aparente C, Circuito 3",
    address: "33/0/72",
  },
  {
    name: "Medidor de energia - Potencia Aparente A, Circuito 4",
    address: "33/0/73",
  },
  {
    name: "Medidor de energia - Potencia Aparente B, Circuito 4",
    address: "33/0/74",
  },
  {
    name: "Medidor de energia - Potencia Aparente C, Circuito 4",
    address: "33/0/75",
  },
  {
    name: "Medidor de energia - Potencia Aparente Total, Circuito 1",
    address: "33/0/76",
  },
  {
    name: "Medidor de energia - Potencia Aparente Total, Circuito 2",
    address: "33/0/77",
  },
  {
    name: "Medidor de energia - Potencia Aparente Total, Circuito 3",
    address: "33/0/78",
  },
  {
    name: "Medidor de energia - Potencia Aparente Total, Circuito 4",
    address: "33/0/79",
  },
  {
    name: "Medidor de energia - Energia Fase A, Circuito 1",
    address: "33/0/80",
  },
  {
    name: "Medidor de energia - Energia Fase B, Circuito 1",
    address: "33/0/81",
  },
  {
    name: "Medidor de energia - Energia Fase C, Circuito 1",
    address: "33/0/82",
  },
  {
    name: "Medidor de energia - Energia Fase A, Circuito 2",
    address: "33/0/83",
  },
  {
    name: "Medidor de energia - Energia Fase B, Circuito 2",
    address: "33/0/84",
  },
  {
    name: "Medidor de energia - Energia Fase C, Circuito 2",
    address: "33/0/85",
  },
  {
    name: "Medidor de energia - Energia Fase A, Circuito 3",
    address: "33/0/86",
  },
  {
    name: "Medidor de energia - Energia Fase B, Circuito 3",
    address: "33/0/87",
  },
  {
    name: "Medidor de energia - Energia Fase C, Circuito 3",
    address: "33/0/88",
  },
  {
    name: "Medidor de energia - Energia Fase A, Circuito 4",
    address: "33/0/89",
  },
  {
    name: "Medidor de energia - Energia Fase B, Circuito 4",
    address: "33/0/90",
  },
  {
    name: "Medidor de energia - Energia Fase C, Circuito 4",
    address: "33/0/91",
  },
  {
    name: "Medidor de energia - Energia Total, Circuito 1",
    address: "33/0/92",
  },
  {
    name: "Medidor de energia - Energia Total, Circuito 2",
    address: "33/0/93",
  },
  {
    name: "Medidor de energia - Energia Total, Circuito 3",
    address: "33/0/94",
  },
  {
    name: "Medidor de energia - Energia Total, Circuito 4",
    address: "33/0/95",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase A, Circuito 1",
    address: "33/0/96",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase B, Circuito 1",
    address: "33/0/97",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase C, Circuito 1",
    address: "33/0/98",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase A, Circuito 2",
    address: "33/0/99",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase B, Circuito 2",
    address: "33/0/100",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase C, Circuito 2",
    address: "33/0/101",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase A, Circuito 3",
    address: "33/0/102",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase B, Circuito 3",
    address: "33/0/103",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase C, Circuito 3",
    address: "33/0/104",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase A, Circuito 4",
    address: "33/0/105",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase B, Circuito 4",
    address: "33/0/106",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase C, Circuito 4",
    address: "33/0/107",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Total, Circuito 1",
    address: "33/0/108",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Total, Circuito 2",
    address: "33/0/109",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Total, Circuito 3",
    address: "33/0/110",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Total, Circuito 4",
    address: "33/0/111",
  },
  {
    name: "Medidor de energia - Corriente C, Circuito 1",
    address: "33/0/116",
  },
];

let circuit1 = [
  {
    name: "Medidor de energia - Corriente A, Circuito 1",
    address: "33/0/5",
  },
  {
    name: "Medidor de energia - Corriente B, Circuito 1",
    address: "33/0/6",
  },
  {
    name: "Medidor de energia - Corriente C, Circuito 1",
    address: "33/0/116",
  },
  {
    name: "Medidor de energia - Potencia A, Circuito 1",
    address: "33/0/16",
  },
  {
    name: "Medidor de energia - Potencia B, Circuito 1",
    address: "33/0/17",
  },
  {
    name: "Medidor de energia - Potencia C, Circuito 1",
    address: "33/0/18",
  },
  {
    name: "Medidor de energia - Potencia Total, Circuito 1",
    address: "33/0/28",
  },
  {
    name: "Medidor de energia - Potencia Reactiva A, Circuito 1",
    address: "33/0/32",
  },
  {
    name: "Medidor de energia - Potencia Reactiva B, Circuito 1",
    address: "33/0/33",
  },
  {
    name: "Medidor de energia - Potencia Reactiva C, Circuito 1",
    address: "33/0/34",
  },
  {
    name: "Medidor de energia - Potencia Reactiva Total, Circuito 1",
    address: "33/0/44",
  },
  {
    name: "Medidor de energia - Factor de Potencia A, Circuito 1",
    address: "33/0/48",
  },
  {
    name: "Medidor de energia - Factor de Potencia B, Circuito 1",
    address: "33/0/49",
  },
  {
    name: "Medidor de energia - Factor de Potencia C, Circuito 1",
    address: "33/0/50",
  },
  {
    name: "Medidor de energia - Factor de Potencia Total, Circuito 1",
    address: "33/0/60",
  },
  {
    name: "Medidor de energia - Potencia Aparente A, Circuito 1",
    address: "33/0/64",
  },
  {
    name: "Medidor de energia - Potencia Aparente B, Circuito 1",
    address: "33/0/65",
  },
  {
    name: "Medidor de energia - Potencia Aparente C, Circuito 1",
    address: "33/0/66",
  },
  {
    name: "Medidor de energia - Potencia Aparente Total, Circuito 1",
    address: "33/0/76",
  },
  {
    name: "Medidor de energia - Energia Fase A, Circuito 1",
    address: "33/0/80",
  },
  {
    name: "Medidor de energia - Energia Fase B, Circuito 1",
    address: "33/0/81",
  },
  {
    name: "Medidor de energia - Energia Fase C, Circuito 1",
    address: "33/0/82",
  },
  {
    name: "Medidor de energia - Energia Total, Circuito 1",
    address: "33/0/92",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase A, Circuito 1",
    address: "33/0/96",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase B, Circuito 1",
    address: "33/0/97",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase C, Circuito 1",
    address: "33/0/98",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Total, Circuito 1",
    address: "33/0/108",
  },
];

let circuit2 = [
  {
    name: "Medidor de energia - Corriente A, Circuito 2",
    address: "33/0/7",
  },
  {
    name: "Medidor de energia - Corriente B, Circuito 2",
    address: "33/0/8",
  },
  {
    name: "Medidor de energia - Corriente C, Circuito 2",
    address: "33/0/9",
  },
  {
    name: "Medidor de energia - Potencia A, Circuito 2",
    address: "33/0/19",
  },
  {
    name: "Medidor de energia - Potencia B, Circuito 2",
    address: "33/0/20",
  },
  {
    name: "Medidor de energia - Potencia C, Circuito 2",
    address: "33/0/21",
  },
  {
    name: "Medidor de energia - Potencia Total, Circuito 2",
    address: "33/0/29",
  },
  {
    name: "Medidor de energia - Potencia Reactiva A, Circuito 2",
    address: "33/0/35",
  },
  {
    name: "Medidor de energia - Potencia Reactiva B, Circuito 2",
    address: "33/0/36",
  },
  {
    name: "Medidor de energia - Potencia Reactiva C, Circuito 2",
    address: "33/0/37",
  },
  {
    name: "Medidor de energia - Potencia Reactiva Total, Circuito 2",
    address: "33/0/45",
  },
  {
    name: "Medidor de energia - Factor de Potencia A, Circuito 2",
    address: "33/0/51",
  },
  {
    name: "Medidor de energia - Factor de Potencia B, Circuito 2",
    address: "33/0/52",
  },
  {
    name: "Medidor de energia - Factor de Potencia C, Circuito 2",
    address: "33/0/53",
  },
  {
    name: "Medidor de energia - Factor de Potencia Total, Circuito 2",
    address: "33/0/61",
  },
  {
    name: "Medidor de energia - Potencia Aparente A, Circuito 2",
    address: "33/0/67",
  },
  {
    name: "Medidor de energia - Potencia Aparente B, Circuito 2",
    address: "33/0/68",
  },
  {
    name: "Medidor de energia - Potencia Aparente C, Circuito 2",
    address: "33/0/69",
  },
  {
    name: "Medidor de energia - Potencia Aparente Total, Circuito 2",
    address: "33/0/77",
  },
  {
    name: "Medidor de energia - Energia Fase A, Circuito 2",
    address: "33/0/83",
  },
  {
    name: "Medidor de energia - Energia Fase B, Circuito 2",
    address: "33/0/84",
  },
  {
    name: "Medidor de energia - Energia Fase C, Circuito 2",
    address: "33/0/85",
  },
  {
    name: "Medidor de energia - Energia Total, Circuito 2",
    address: "33/0/93",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase A, Circuito 2",
    address: "33/0/99",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase B, Circuito 2",
    address: "33/0/100",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase C, Circuito 2",
    address: "33/0/101",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Total, Circuito 2",
    address: "33/0/109",
  },
];

let circuit3 = [
  {
    name: "Medidor de energia - Corriente A, Circuito 3",
    address: "33/0/10",
  },
  {
    name: "Medidor de energia - Corriente B, Circuito 3",
    address: "33/0/11",
  },
  {
    name: "Medidor de energia - Corriente C, Circuito 3",
    address: "33/0/12",
  },
  {
    name: "Medidor de energia - Potencia A, Circuito 3",
    address: "33/0/22",
  },
  {
    name: "Medidor de energia - Potencia B, Circuito 3",
    address: "33/0/23",
  },
  {
    name: "Medidor de energia - Potencia C, Circuito 3",
    address: "33/0/24",
  },
  {
    name: "Medidor de energia - Potencia Total, Circuito 3",
    address: "33/0/30",
  },
  {
    name: "Medidor de energia - Potencia Reactiva A, Circuito 3",
    address: "33/0/38",
  },
  {
    name: "Medidor de energia - Potencia Reactiva B, Circuito 3",
    address: "33/0/39",
  },
  {
    name: "Medidor de energia - Potencia Reactiva C, Circuito 3",
    address: "33/0/40",
  },
  {
    name: "Medidor de energia - Potencia Reactiva Total, Circuito 3",
    address: "33/0/46",
  },
  {
    name: "Medidor de energia - Factor de Potencia A, Circuito 3",
    address: "33/0/54",
  },
  {
    name: "Medidor de energia - Factor de Potencia B, Circuito 3",
    address: "33/0/55",
  },
  {
    name: "Medidor de energia - Factor de Potencia C, Circuito 3",
    address: "33/0/56",
  },
  {
    name: "Medidor de energia - Factor de Potencia Total, Circuito 3",
    address: "33/0/62",
  },
  {
    name: "Medidor de energia - Potencia Aparente A, Circuito 3",
    address: "33/0/70",
  },
  {
    name: "Medidor de energia - Potencia Aparente B, Circuito 3",
    address: "33/0/71",
  },
  {
    name: "Medidor de energia - Potencia Aparente C, Circuito 3",
    address: "33/0/72",
  },
  {
    name: "Medidor de energia - Potencia Aparente Total, Circuito 3",
    address: "33/0/78",
  },
  {
    name: "Medidor de energia - Energia Fase A, Circuito 3",
    address: "33/0/86",
  },
  {
    name: "Medidor de energia - Energia Fase B, Circuito 3",
    address: "33/0/87",
  },
  {
    name: "Medidor de energia - Energia Fase C, Circuito 3",
    address: "33/0/88",
  },
  {
    name: "Medidor de energia - Energia Total, Circuito 3",
    address: "33/0/94",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase A, Circuito 3",
    address: "33/0/102",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase B, Circuito 3",
    address: "33/0/103",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase C, Circuito 3",
    address: "33/0/104",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Total, Circuito 3",
    address: "33/0/110",
  },
];

let circuit4 = [
  {
    name: "Medidor de energia - Corriente A, Circuito 4",
    address: "33/0/13",
  },
  {
    name: "Medidor de energia - Corriente B, Circuito 4",
    address: "33/0/14",
  },
  {
    name: "Medidor de energia - Corriente C, Circuito 4",
    address: "33/0/15",
  },
  {
    name: "Medidor de energia - Potencia A, Circuito 4",
    address: "33/0/25",
  },
  {
    name: "Medidor de energia - Potencia B, Circuito 4",
    address: "33/0/26",
  },
  {
    name: "Medidor de energia - Potencia C, Circuito 4",
    address: "33/0/27",
  },
  {
    name: "Medidor de energia - Potencia Total, Circuito 4",
    address: "33/0/31",
  },
  {
    name: "Medidor de energia - Potencia Reactiva A, Circuito 4",
    address: "33/0/41",
  },
  {
    name: "Medidor de energia - Potencia Reactiva B, Circuito 4",
    address: "33/0/42",
  },
  {
    name: "Medidor de energia - Potencia Reactiva C, Circuito 4",
    address: "33/0/43",
  },
  {
    name: "Medidor de energia - Potencia Reactiva Total, Circuito 4",
    address: "33/0/47",
  },
  {
    name: "Medidor de energia - Factor de Potencia A, Circuito 4",
    address: "33/0/57",
  },
  {
    name: "Medidor de energia - Factor de Potencia B, Circuito 4",
    address: "33/0/58",
  },
  {
    name: "Medidor de energia - Factor de Potencia C, Circuito 4",
    address: "33/0/59",
  },
  {
    name: "Medidor de energia - Factor de Potencia Total, Circuito 4",
    address: "33/0/63",
  },
  {
    name: "Medidor de energia - Potencia Aparente A, Circuito 4",
    address: "33/0/73",
  },
  {
    name: "Medidor de energia - Potencia Aparente B, Circuito 4",
    address: "33/0/74",
  },
  {
    name: "Medidor de energia - Potencia Aparente C, Circuito 4",
    address: "33/0/75",
  },
  {
    name: "Medidor de energia - Potencia Aparente Total, Circuito 4",
    address: "33/0/79",
  },
  {
    name: "Medidor de energia - Energia Fase A, Circuito 4",
    address: "33/0/89",
  },
  {
    name: "Medidor de energia - Energia Fase B, Circuito 4",
    address: "33/0/90",
  },
  {
    name: "Medidor de energia - Energia Fase C, Circuito 4",
    address: "33/0/91",
  },
  {
    name: "Medidor de energia - Energia Total, Circuito 4",
    address: "33/0/95",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase A, Circuito 4",
    address: "33/0/105",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase B, Circuito 4",
    address: "33/0/106",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Fase C, Circuito 4",
    address: "33/0/107",
  },
  {
    name: "Medidor de energia - Energia Reactiva hora Total, Circuito 4",
    address: "33/0/111",
  },
];

let totalEnergy = [
  {
    name: "Medidor de energia - Energia Total, Circuito 1",
    address: "33/0/92",
  },
  {
    name: "Medidor de energia - Energia Total, Circuito 2",
    address: "33/0/93",
  },
  {
    name: "Medidor de energia - Energia Total, Circuito 3",
    address: "33/0/94",
  },
  {
    name: "Medidor de energia - Energia Total, Circuito 4",
    address: "33/0/95",
  },
];

let selectorSignal = [
  "2/0/1",
  "2/0/2",
  "2/0/3",
  "2/0/4",
  "2/0/5",
  "2/0/6",
  "2/0/7",
  "2/0/8",
  "2/0/9",
];

let meditionsObjects = [
  "33/0/92",
  "33/0/28",
  "33/0/60",
  "2/1/1",
  "33/0/44",
  "33/0/76",
  "33/0/108",
];

let airsEnergy = ["33/0/93", "33/0/94", "33/0/95"];

let meterTopics = [
  "Corriente",
  "Potencia",
  "Potencia Reactiva",
  "Factor de Potencia",
  "Potencia Aparente",
  "Energia",
  "Energia Reactiva",
];

let modalDirections = {
  0: ["1/1/1", "1/3/1", "33/0/28", "33/0/92"],
  1: ["1/1/2", "1/3/2", "33/0/28", "33/0/92"],
  2: ["1/1/3", "1/3/3", "33/0/28", "33/0/92"],
  3: ["1/1/5", "1/3/5", "33/0/28", "33/0/92"],
  4: ["1/1/6", "1/3/6", "33/0/28", "33/0/92"],
  5: ["3/0/24", "3/0/25", "33/0/29", "33/0/93"],
  6: ["3/1/24", "3/1/25", "33/0/30", "33/0/94"],
  7: ["3/2/24", "3/2/25", "33/0/31", "33/0/95"],
  8: ["1/1/4", "1/3/4", "33/0/28", "33/0/92"],
};

let modalLineChart = {
  0: "1/1/1",
  1: "1/1/2",
  2: "1/1/3",
  4: "1/1/5",
  5: "1/1/6",
  6: "3/0/25",
  7: "3/1/25",
  8: "3/2/25",
  3: "1/1/4",
}

export default {
  objects,
  medidor,
  circuit1,
  circuit2,
  circuit3,
  circuit4,
  totalEnergy,
  selectorSignal,
  meterTopics,
  meditionsObjects,
  airsEnergy,
  modalDirections,
};
