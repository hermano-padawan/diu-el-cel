// Context estable que complementa la lectura diària de cada signe.
export const signGuides: Record<string, { character: string; reading: string }> = {
  aries: {
    character: "Àries és un signe de foc cardinal, associat a la iniciativa i a l'impuls de començar. Quan té una idea clara, prefereix provar-la abans de discutir-ne tots els detalls. Aquesta energia pot obrir camins, però també necessita escoltar els ritmes d'altres persones i reservar temps per revisar les decisions.",
    reading: "Llegeix el missatge del dia com una invitació a triar on posar l'energia. Una proposta que demana resposta immediata no sempre exigeix una decisió immediata."
  },
  taure: {
    character: "Taure és terra fixa: aprecia la continuïtat, el plaer concret i els acords que es compleixen. La seva constància ajuda a sostenir projectes quan passa l'entusiasme inicial. El repte és distingir una rutina que cuida d'una que impedeix provar una manera millor de fer les coses.",
    reading: "En llegir la predicció, fixa't en les decisions petites que pots sostenir. Canviar un detall de la rutina pot ser més útil que refer tot el pla."
  },
  bessons: {
    character: "Bessons és aire mutable i es vincula amb la curiositat, el llenguatge i l'intercanvi d'idees. Pot veure dues interpretacions d'un mateix fet i connectar persones o temes aparentment llunyans. Aquesta flexibilitat és valuosa si també dedica atenció a acabar allò que ha començat.",
    reading: "La lectura diària pot servir per escollir una conversa o una pregunta important. No cal respondre a tots els estímuls alhora."
  },
  cranc: {
    character: "Cranc és aigua cardinal. La tradició astrològica el relaciona amb la cura, la memòria i la necessitat de sentir-se a casa amb les persones properes. Sap detectar canvis d'ambient subtils, però li convé posar paraules als límits en lloc d'esperar que els altres els endevinin.",
    reading: "Observa si el missatge del dia parla de cuidar un vincle o de cuidar el teu espai. Les dues coses poden conviure."
  },
  lleo: {
    character: "Lleó és foc fix i representa expressió, creativitat i generositat. Li agrada donar forma visible a una idea i celebrar els esforços compartits. La confiança creix quan pot mostrar el que fa sense haver de convertir cada resultat en una prova del seu valor personal.",
    reading: "Fes servir la lectura per pensar què vols compartir avui i a qui vols reconèixer. El protagonisme també pot consistir a fer lloc als altres."
  },
  verge: {
    character: "Verge és terra mutable i es relaciona amb l'observació, l'ofici i la millora dels detalls. Té facilitat per detectar un error abans que es faci gran i per convertir una intenció en un procés útil. El risc és ajornar una tasca perquè encara no ha trobat la manera perfecta de fer-la.",
    reading: "Busca un ajust concret que puguis fer avui. Una versió prou bona i compartida sovint ajuda més que un pla impecable que no surt del paper."
  },
  balanca: {
    character: "Balança és aire cardinal i s'associa amb el diàleg, la proporció i la capacitat de considerar més d'un punt de vista. Pot facilitar acords perquè escolta els interessos de cada part. Aquesta habilitat funciona millor quan també expressa el que prefereix, fins i tot si això crea un desacord temporal.",
    reading: "L'horòscop pot ajudar-te a separar una decisió compartida d'una que et correspon prendre. L'equilibri no exigeix agradar a tothom."
  },
  escorpio: {
    character: "Escorpí és aigua fixa. En astrologia simbolitza la intensitat, la reserva i la voluntat d'entendre què hi ha sota la superfície. Pot mantenir el compromís en moments difícils i preguntar allò que altres eviten. Confiar no implica renunciar als límits, però tampoc comprovar cada gest de l'altre.",
    reading: "Pren el missatge del dia com un punt de partida per aclarir què saps i què només sospites. Una pregunta directa pot obrir més que una conclusió precipitada."
  },
  sagitari: {
    character: "Sagitari és foc mutable i mira cap als horitzons amplis: aprenentatge, viatges i idees que qüestionen els hàbits. La seva energia pot animar un grup a provar un camí nou. Perquè la llibertat sigui compartida, li cal concretar els compromisos i escoltar com afecten els canvis de pla als altres.",
    reading: "Si el text d'avui et suggereix explorar, tria un primer pas assequible. No cal prometre un gran canvi per obrir una porta."
  },
  capricorn: {
    character: "Capricorn és terra cardinal i es relaciona amb l'estructura, la responsabilitat i els objectius a llarg termini. Sap convertir una ambició en una seqüència de passos. El repte és reconèixer el que ja ha fet i ajustar un objectiu quan canvien les circumstàncies, sense interpretar-ho com un fracàs.",
    reading: "Llegeix el consell del dia pensant en el següent pas, no només en la meta final. Descansar també pot formar part d'un pla sostenible."
  },
  aquari: {
    character: "Aquari és aire fix. S'associa amb les idees independents, la vida col·lectiva i la disposició a revisar una norma que ja no ajuda. Pot aportar una perspectiva nova a un problema conegut. Per portar-la a la pràctica, necessita escoltar les necessitats concretes de les persones que viuran el canvi.",
    reading: "Una idea original guanya força quan pots explicar a qui beneficia i com provar-la a petita escala. Aquesta és una bona pregunta per aplicar a la lectura d'avui."
  },
  peixos: {
    character: "Peixos és aigua mutable i es vincula amb la imaginació, l'empatia i la sensibilitat als matisos. Pot donar forma a emocions difícils d'explicar i acompanyar sense exigir respostes ràpides. Aquesta obertura necessita límits clars perquè ajudar algú no signifiqui deixar de banda les pròpies necessitats.",
    reading: "El missatge del dia pot inspirar una pausa creativa o una conversa sincera. Distingir la intuïció d'una suposició t'ajudarà a decidir què fer després."
  }
};
