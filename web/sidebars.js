// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      label: "1.1 - I.A. 101",
      id: "cours/rencontre1.1", // Doit matcher le nom du document qui est dans docs/01-cours/. Les chiffres au début (ex : 01-) sont ignorés.
      customProps: { // Attention, il faut recompiler à chaque modification dans sidebar.js pour que les modifications s'appliquent.
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-08-25" }  // Date du cours pour le groupe 1010 du le Prof 1
          ],
        },
        tooltip: "visible" // Valeurs possibles visible ou cache, valeur par défaut "visible"
      }
    },
    {
      type: "doc",
      label: "1.2 - Le neurone artificiel",
      id: "cours/rencontre1.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-08-28" } // Date du cours pour le groupe 1010 du le Prof 1
          ],
        },
      }
    },
    {
      type: "doc",
      label: "2.1 - Le neurone artificiel",
      id: "cours/rencontre2.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-09-01" }
          ],
        },
      }
    },
    {
      type: "doc",
      label: "2.2 - La rétropropagation",
      id: "cours/rencontre2.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-09-04" }
          ],
        },
      }
    },
    {
      type: "doc",
      label: "3.1 - La rétropropagation",
      id: "cours/rencontre3.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-09-08" }
          ],
        },
      }
    },
    {
      type: "doc",
      label: "3.2 - Programmation orientée objet",
      id: "cours/rencontre3.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-09-11" }
          ],
        },
      },
    },
    {
      type: "doc",
      label: "4.1 - Examen Quiz - Keras",
      id: "cours/rencontre4.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-09-15" }
          ],
        },
      },
      "className": "examen"
    },
    {
      type: "doc",
      label: "4.2 - Application - MNIST",
      id: "cours/rencontre4.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-09-18" }
          ],
        },
      },
    },
    {
      type: "doc",
      label: "5.1 - Application - MNIST",
      id: "cours/rencontre5.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-09-22" }
          ],
        },
      },
    },
    {
      type: "doc",
      label: "5.2 - Optimisation - Généralisation",
      id: "cours/rencontre5.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-09-25" }
          ],
        },
      }
    },
    {
      type: "doc",
      label: "6.1 - Optimisation - Généralisation",
      id: "cours/rencontre6.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-09-29" }
          ],
        },
      }
    },
    {
      type: "doc",
      label: "6.2 - TP 1",
      id: "cours/rencontre6.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-10-02" }
          ],
        },
        avancementLabel: "TP1",
        avancement: 0.5
      },
      "className": "remise-tp1",
    },
    {
      type: "doc",
      label: "7.1 - TP 1",
      id: "cours/rencontre7.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-10-09" }
          ],
        },
        avancementLabel: "TP1",
        avancement: 1.0
      },
      "className": "remise-tp1",
    },
    {
      type: "doc",
      label: "7.2 - Examen Quiz - Intra formatif",
      id: "cours/rencontre7.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-10-20" }
          ],
        },
      },
      "className": "examen"
    },
    {
      type: "doc",
      label: "8.1 - Intra sommatif",
      id: "cours/rencontre8.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-10-23" }
          ],
        }
      },
      "className": "examen"
    },
    {
      type: "doc",
      label: "8.2 - Réseaux convolutionnels",
      id: "cours/rencontre8.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-10-27" }
          ],
        },
      },
    },
    {
      type: "doc",
      label: "9.1 - Réseaux convolutionnels",
      id: "cours/rencontre9.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-10-30" }
          ],
        },
      }
    },
    {
      type: "doc",
      label: "9.2 - TP 2",
      id: "cours/rencontre9.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-11-03" }
          ],
        },
        avancementLabel: "TP2",
        avancement: 0.33
      },
      "className": "remise-tp2",
    },
    {
      type: "doc",
      label: "10.1 - TP 2",
      id: "cours/rencontre10.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-11-06" }
          ],
        },
        avancementLabel: "TP2",
        avancement: 0.66
      },
      "className": "remise-tp2",
    },
    {
      type: "doc",
      label: "10.2 - TP 2",
      id: "cours/rencontre10.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-11-10" }
          ],
        },
        avancementLabel: "TP2",
        avancement: 1.0
      },
      "className": "remise-tp2",
    },
    {
      type: "doc",
      label: "11.1 - Données textuelles",
      id: "cours/rencontre11.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-11-13" }
          ],
        },
      },
    },
    {
      type: "doc",
      label: "11.2 - Données textuelles",
      id: "cours/rencontre11.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-11-17" }
          ],
        },
      }
    },
    {
      type: "doc",
      label: "12.1 - Transformers",
      id: "cours/rencontre12.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-11-20" }
          ],
        },
      }
    },
    {
      type: "doc",
      label: "12.2 - Transformers",
      id: "cours/rencontre12.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-11-24" }
          ],
        },
      }
    },
    {
      type: "doc",
      label: "13.1 - TP 3",
      id: "cours/rencontre13.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-11-27" }
          ],
        },
        avancementLabel: "TP3",
        avancement: 0.25
      },
      "className": "remise-tp3",
    },
    {
      type: "doc",
      label: "13.2 - TP 3",
      id: "cours/rencontre13.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-12-01" }
          ],
        },
        avancementLabel: "TP3",
        avancement: 0.50
      },
      "className": "remise-tp3",
    },
    {
      type: "doc",
      label: "14.1 - Enjeux sociétaux - TP 3",
      id: "cours/rencontre14.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-12-04" }
          ],
        },
        avancementLabel: "TP3",
        avancement: 0.75
      },
      "className": "remise-tp2",
    },
    {
      type: "doc",
      label: "14.2 - TP 3",
      id: "cours/rencontre14.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-12-08" }
          ],
        },
        avancementLabel: "TP3",
        avancement: 1
      },
      "className": "remise-tp3",
    },
    {
      type: "doc",
      label: "15.1 - Quiz sommatif - Final formatif",
      id: "cours/rencontre15.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-12-11" }
          ],
        }
      },
      "className": "examen"
    },
    {
      type: "doc",
      label: "15.2 - Final sommatif",
      id: "cours/rencontre15.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            { "1010": "2026-12-22" }
          ],
        }
      },
      "className": "examen"
    }
  ],
  "tp": [
    {
      type: "autogenerated",
      "dirName": "02-tp"
    }
  ],
  "python": [
    {
      type: "autogenerated",
      "dirName": "03-python"
    }
  ],
  "colab": [
    {
      type: "autogenerated",
      "dirName": "04-colab"
    }
  ],
  "numpykeras": [
    {
      type: "autogenerated",
      "dirName": "05-numpykeras"
    }
  ],
  "googlecloud": [
    {
      type: "autogenerated",
      "dirName": "06-googlecloud"
    }
  ]
};

module.exports = sidebars;
