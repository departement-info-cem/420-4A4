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
            {"1010": "2026-01-27"}  // Date du cours pour le groupe 1010 du le Prof 1
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
            {"1010": "2026-01-29"} // Date du cours pour le groupe 1010 du le Prof 1
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
            {"1010": "2026-02-03"}
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
            {"1010": "2026-02-05"}
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
            {"1010": "2026-02-10"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "3.2 - Application - MNIST/Keras",
      id: "cours/rencontre3.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-02-12"}
          ],
        },
      },
      "className": "examen"
    },
    {
      type: "doc",
      label: "4.1 - Application - MNIST/Keras",
      id: "cours/rencontre4.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-02-17"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "4.2 - Optimisation - Généralisation",
      id: "cours/rencontre4.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-02-19"}
          ],
        },
      },
    },
    {
      type: "doc",
      label: "5.1 - Optimisation - Généralisation",
      id: "cours/rencontre5.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-02-24"}
          ],
        },
        avancementLabel: "TP1",
        avancement: 0.33
      },
    },
    {
      type: "doc",
      label: "5.2 - TP 1",
      id: "cours/rencontre5.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-02-26"}
          ],
        },
        avancementLabel: "TP1",
        avancement: 0.66
      }
    },
    {
      type: "doc",
      label: "6.1 - TP 1",
      id: "cours/rencontre6.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-03-03"}
          ],
        },
        avancementLabel: "TP1",
        avancement: 1.0
      }
    },
    {
      type: "doc",
      label: "6.2 - Les données",
      id: "cours/rencontre6.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-03-05"}
          ],
        },
      },
      "className": "remise-tp1"
    },
    {
      type: "doc",
      label: "7.1 - Examen intra formatif",
      id: "cours/rencontre7.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-03-10"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "7.2 - Examen intra sommatif",
      id: "cours/rencontre7.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-03-12"}
          ],
        }
      },
      "className": "examen"
    },
    {
      type: "doc",
      label: "8.1 - Réseaux convolutionnels",
      id: "cours/rencontre8.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-03-24"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "8.2 - Réseaux convolutionnels",
      id: "cours/rencontre8.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-03-26"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "9.1 - TP 2",
      id: "cours/rencontre9.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-04-02"}
          ],
        },
        avancementLabel: "TP2",
        avancement: 0.33
      }
    },
    {
      type: "doc",
      label: "9.2 - TP 2",
      id: "cours/rencontre9.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-04-07"}
          ],
        },
        avancementLabel: "TP2",
        avancement: 0.66
      },
    },
    {
      type: "doc",
      label: "10.1 - TP 2",
      id: "cours/rencontre10.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-04-14"}
          ],
        },
        avancementLabel: "TP2",
        avancement: 1.0
      }
    },
    {
      type: "doc",
      label: "10.2 - Série temporelle, language",
      id: "cours/rencontre10.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-04-16"}
          ],
        },
      },
      "className": "remise-tp2",
    },
    {
      type: "doc",
      label: "11.1 - Transformers",
      id: "cours/rencontre11.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-04-21"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "11.2 - Enjeux sociétaux",
      id: "cours/rencontre11.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-04-23"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "12.1 - nanoGPT et tinymoliere",
      id: "cours/rencontre12.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-04-28"}
          ],
        },
      }
    },
    {
      type: "doc",
      label: "12.2 - nanoGPT et tinymoliere",
      id: "cours/rencontre12.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-04-30"}
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
            {"1010": "2026-05-05"}
          ],
        },
        avancementLabel: "TP3",
        avancement: 0.25
      }
    },
    {
      type: "doc",
      label: "13.2 - TP 3",
      id: "cours/rencontre13.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-05-07"}
          ],
        },
        avancementLabel: "TP3",
        avancement: 0.50
      }
    },
    {
      type: "doc",
      label: "14.1 - TP 3",
      id: "cours/rencontre14.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-05-12"}
          ],
        },
        avancementLabel: "TP3",
        avancement: 0.75
      }
    },
    {
      type: "doc",
      label: "14.2 - TP 3",
      id: "cours/rencontre14.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-05-14"}
          ],
        },
        avancementLabel: "TP3",
        avancement: 1
      }
    },
    {
      type: "doc",
      label: "15.1 - Examen final formatif",
      id: "cours/rencontre15.1",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-05-21"}
          ],
        }
      },
      "className": "remise-tp3"
    },
    {
      type: "doc",
      label: "15.2 - Examen final sommatif",
      id: "cours/rencontre15.2",
      customProps: {
        calendrier: {
          "Xavier Glorot": [
            {"1010": "2026-05-26"}
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
