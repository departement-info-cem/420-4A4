// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      label: "1.1 - Rencontre",
      id: "cours/rencontre1.1", // Doit matcher le nom du document qui est dans docs/01-cours/. Les chiffres au début (ex : 01-) sont ignorés.
      customProps: { // Attention, il faut recompiler à chaque modification dans sidebar.js pour que les modifications s'appliquent.
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-01-26"}  // Date du cours pour le groupe 1010 du le Prof 1
          ],
        },
        tooltip: "visible" // Valeurs possibles visible ou cache, valeur par défaut "visible"
      }
    },
    {
      type: "doc",
      label: "1.2 - Rencontre",
      id: "cours/rencontre1.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-01-30"} // Date du cours pour le groupe 1010 du le Prof 1
          ],
        },
      }
    },
    {
      type: "doc",
      label: "2.1 - Rencontre",
      id: "cours/rencontre2.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-02-02"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "2.2 - Rencontre",
      id: "cours/rencontre2.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-02-06"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "3.1 - Rencontre",
      id: "cours/rencontre3.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-02-09"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "3.2 - Rencontre",
      id: "cours/rencontre3.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-02-13"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "4.1 - Rencontre",
      id: "cours/rencontre4.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-02-16"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "4.2 - Rencontre",
      id: "cours/rencontre4.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-02-20"}
          ],
        },
      },
    },
    {
      type: "doc",
      label: "5.1 - Rencontre",
      id: "cours/rencontre5.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-02-23"}
          ],
        },
        avancementLabel: "TP1",
        avancement: 0.33
      },
    },
    {
      type: "doc",
      label: "5.2 - Rencontre",
      id: "cours/rencontre5.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-02-27"}
          ],
        },
        avancementLabel: "TP1",
        avancement: 0.66
      }
    },
    {
      type: "doc",
      label: "6.1 - Rencontre",
      id: "cours/rencontre6.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-03-02"}
          ],
        },
        avancementLabel: "TP1",
        avancement: 1.0
      }
    },
    {
      type: "doc",
      label: "6.2 - Rencontre",
      id: "cours/rencontre6.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-03-06"}
          ],
        },
      },
      "className": "remise-tp1"
    },
    {
      type: "doc",
      label: "7.1 - Rencontre",
      id: "cours/rencontre7.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-03-09"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "7.2 - Rencontre",
      id: "cours/rencontre7.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-03-13"}
          ],
        }
      },
      "className": "examen"
    },
    {
      type: "doc",
      label: "8.1 - Rencontre",
      id: "cours/rencontre8.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-03-23"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "8.2 - Rencontre",
      id: "cours/rencontre8.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-03-27"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "9.1 - Rencontre",
      id: "cours/rencontre9.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-03-30"}
          ],
        },
        avancementLabel: "TP2",
        avancement: 0.33
      }
    },
    {
      type: "doc",
      label: "9.2 - Rencontre",
      id: "cours/rencontre9.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-03-31"}
          ],
        },
        avancementLabel: "TP2",
        avancement: 0.66
      },
    },
    {
      type: "doc",
      label: "10.1 - Rencontre",
      id: "cours/rencontre10.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-04-10"}
          ],
        },
        avancementLabel: "TP2",
        avancement: 1.0
      }
    },
    {
      type: "doc",
      label: "10.2 - Rencontre",
      id: "cours/rencontre10.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-04-13"}
          ],
        },
        "className": "remise-tp2",
      }
    },
    {
      type: "doc",
      label: "11.1 - Rencontre",
      id: "cours/rencontre11.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-04-20"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "11.2 - Rencontre",
      id: "cours/rencontre11.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-04-24"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "12.1 - Rencontre",
      id: "cours/rencontre12.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-04-27"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "12.2 - Rencontre",
      id: "cours/rencontre12.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-05-01"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "13.1 - Rencontre",
      id: "cours/rencontre13.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-05-04"}
          ],
        },
        avancementLabel: "TP3",
        avancement: 0.25
      }
    },
    {
      type: "doc",
      label: "13.2 - Rencontre",
      id: "cours/rencontre13.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-05-08"}
          ],
        },
        avancementLabel: "TP3",
        avancement: 0.50
      }
    },
    {
      type: "doc",
      label: "14.1 - Rencontre",
      id: "cours/rencontre14.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-05-11"}
          ],
        },
        avancementLabel: "TP3",
        avancement: 0.75
      }
    },
    {
      type: "doc",
      label: "14.2 - Rencontre",
      id: "cours/rencontre14.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-05-15"}
          ],
        },
        avancementLabel: "TP3",
        avancement: 1
      }
    },
    {
      type: "doc",
      label: "15.1 - Rencontre",
      id: "cours/rencontre15.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-05-25"}
          ],
        }
      },
      "className": "remise-tp3"
    },
    {
      type: "doc",
      label: "15.2 - Rencontre",
      id: "cours/rencontre15.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-05-29"}
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
    "keras": [
    {
      type: "autogenerated",
      "dirName": "05-keras"
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
