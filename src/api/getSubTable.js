const subTable = [
  {
    avg_pos: 35,
    clicks: 0,
    ctr: '0.00',
    description:
      'Apostas desportivas e jogos de Casino; Diversidade de mercados para apostar ; Aplicação Solverde ; Bom serviço de atendimento ao cliente; Bónus de boas-vindas ...',
    impression: 1,
    keyword: 'solverde apostas online',
    position: 31,
    title: 'Solverde | Aposta Sem Risco - Review 2022',
    vol: 0,
  },
  {
    avg_pos: 36,
    clicks: 0,
    ctr: '0.00',
    description:
      'Previsões, Análises, Prognósticos e Tips. Segue grátis as tips da comunidade e melhora as tuas apostas !',
    impression: 3,
    keyword: 'apostas no placard',
    position: 10,
    title: 'Os melhores Apostadores e Tipsters de futebol',
    vol: 0,
  },
];

export default function getSubTable(url, token) {
  if (url && token) {
    return subTable;
  }
}
