import React, { createContext, useContext, useState, ReactNode, useEffect, Dispatch, SetStateAction } from 'react';
import { jsonToCSV } from 'react-native-csv';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

interface Plan {
  Label: any;
  Length: number;
  Width: number;
  Qty: number;
  Material: string;
  Enabled: boolean;
}

interface Kison {
  longueur: number;
  profondeur: number;
  hauteur: number;
}

interface KisonHaut {
  longueurhaut: number;
  profondeurhaut: number;
  hauteurhaut: number;
}

interface KisonColonne {
  longueurcolonne: number;
  profondeurcolonne: number;
  hauteurcolonne: number;
}

interface WorkContextProps {
  hauteur: number;
  setHauteur: Dispatch<SetStateAction<number>>;
  profondeur: number;
  setProfondeur: Dispatch<SetStateAction<number>>;
  longueur: number;
  setLongueur: Dispatch<SetStateAction<number>>;
  hauteurhaut: number;
  setHauteurhaut: Dispatch<SetStateAction<number>>;
  profondeurhaut: number;
  setProfondeurhaut: Dispatch<SetStateAction<number>>;
  longueurhaut: number;
  setLongueurhaut: Dispatch<SetStateAction<number>>;
  hauteurcolonne: number;
  setHauteurcolonne: Dispatch<SetStateAction<number>>;
  profondeurcolonne: number;
  setProfondeurcolonne: Dispatch<SetStateAction<number>>;
  longueurcolonne: number;
  setLongueurcolonne: Dispatch<SetStateAction<number>>;
  kison: Kison[];
  setKison: Dispatch<SetStateAction<Kison[]>>;
  kisonhaut: KisonHaut[];
  setKisonhaut: Dispatch<SetStateAction<KisonHaut[]>>;
  kisoncolonne: KisonColonne[];
  setKisoncolonne: Dispatch<SetStateAction<KisonColonne[]>>;
  csvContent: string;
  setCsvContent: Dispatch<SetStateAction<string>>;
  add: () => void;
  addhaut: () => void;
  addcolonne: () => void;
  clear: () => void;
  clearhaut: () => void;
  clearbas: () => void;
  clearcolone: () => void;
  importPlans: () => void;
  back: () => void;
  save: () => Promise<void>;
  activeComponent: string | null;
  setActiveComponent: Dispatch<SetStateAction<string | null>>;
  activeComponentD: string | null;
  setActiveComponentD: Dispatch<SetStateAction<string | null>>;
}

const WorkContext = createContext<WorkContextProps | undefined>(undefined);

export const WorkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [hauteur, setHauteur] = useState<number>(70);
  const [profondeur, setProfondeur] = useState<number>(55);
  const [longueur, setLongueur] = useState<number>(60);
  const [hauteurhaut, setHauteurhaut] = useState<number>(70);
  const [profondeurhaut, setProfondeurhaut] = useState<number>(30);
  const [longueurhaut, setLongueurhaut] = useState<number>(80);
  const [hauteurcolonne, setHauteurcolonne] = useState<number>(240);
  const [profondeurcolonne, setProfondeurcolonne] = useState<number>(55);
  const [longueurcolonne, setLongueurcolonne] = useState<number>(60);
  const [kison, setKison] = useState<Kison[]>([]);
  const [kisonhaut, setKisonhaut] = useState<KisonHaut[]>([]);
  const [kisoncolonne, setKisoncolonne] = useState<KisonColonne[]>([]);
  const [csvContent, setCsvContent] = useState<string>('');
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const [activeComponentD, setActiveComponentD] = useState<string | null>(null);

  useEffect(() => {
    const generateCSVContent = () => {
      const plans: Plan[] = [
        ...kison.flatMap((kisons) => {
          if (kisons.longueur >= 80) {
            return [
              { Length: kisons.longueur - 3.2, Width: kisons.profondeur, Qty: 1, Material: 'Plan', Label: `etager bas `, Enabled: true },
              { Length: kisons.longueur - 3.2, Width: 10, Qty: 2, Material: 'Plan', Label: '', Enabled: false },
              { Length: kisons.hauteur, Width: kisons.profondeur + 5, Qty: 2, Material: 'Plan', Label: `pario bas`, Enabled: true },
              { Length: kisons.hauteur - 0.4, Width: (kisons.longueur - 0.4) / 2, Qty: 2, Material: 'Port', Label: `ports bas (${kisons.longueur} / 2)`, Enabled: true }
            ];
          } else {
            return [
              { Length: kisons.longueur - 3.2, Width: kisons.profondeur, Qty: 1, Material: 'Plan', Label: `etager bas `, Enabled: true },
              { Length: kisons.longueur - 3.2, Width: 10, Qty: 2, Material: 'Plan', Label: '', Enabled: false },
              { Length: kisons.hauteur, Width: kisons.profondeur + 5, Qty: 2, Material: 'Plan', Label: `pario bas`, Enabled: true },
              { Length: kisons.hauteur - 0.4, Width: kisons.longueur - 0.4, Qty: 1, Material: 'Port', Label: `port bas (${kisons.longueur})`, Enabled: true }
            ];
          }
        }),
        ...kisonhaut.flatMap((kisonhauts) => {
          if (kisonhauts.longueurhaut >= 80) {
            return [
              { Length: kisonhauts.longueurhaut - 3.2, Width: kisonhauts.profondeurhaut, Qty: 3, Material: 'Plan', Label: `etagr haut `, Enabled: true },
              { Length: kisonhauts.hauteurhaut, Width: kisonhauts.profondeurhaut + 2, Qty: 2, Material: 'Plan', Label: 'pario haut', Enabled: true },
              { Length: kisonhauts.hauteurhaut - 0.4, Width: (kisonhauts.longueurhaut - 0.4) / 2, Qty: 2, Material: 'Port', Label: `prots haut (${kisonhauts.longueurhaut}/2)`, Enabled: true }
            ];
          } else {
            return [
              { Length: kisonhauts.longueurhaut - 3.2, Width: kisonhauts.profondeurhaut, Qty: 3, Material: 'Plan', Label: `etagr haut `, Enabled: true },
              { Length: kisonhauts.hauteurhaut, Width: kisonhauts.profondeurhaut + 2, Qty: 2, Material: 'Plan', Label: 'pario haut', Enabled: true },
              { Length: kisonhauts.hauteurhaut - 0.4, Width: kisonhauts.longueurhaut - 0.4, Qty: 1, Material: 'Port', Label: `prot haut (${kisonhauts.longueurhaut})`, Enabled: true }
            ]
          }
        }),
        ...kisoncolonne.flatMap((kisoncolonnes) => {
          return [
            { Length: kisoncolonnes.longueurcolonne - 3.2, Width: kisoncolonnes.profondeurcolonne, Qty: 4, Material: 'Plan', Label: `etagr colonne `, Enabled: true },
            { Length: kisoncolonnes.hauteurcolonne, Width: kisoncolonnes.profondeurcolonne + 5, Qty: 2, Material: 'Plan', Label: 'pario colone', Enabled: true },
            // { Length: kisoncolonnes.hauteurcolonne - 0.4, Width: (kisoncolonnes.longueurcolonne - 0.4) / 2, Qty: 2, Material: 'Port', Label: `prots haut (${kisoncolonnes.longueurcolonne}/2)`, Enabled: true }
          ];

        })
      ];

      const aggregatedPlans = plans.reduce<Plan[]>((acc, plan) => {
        const existingPlan = acc.find(p => p.Length === plan.Length && p.Width === plan.Width && p.Material === plan.Material && p.Label === plan.Label);
        if (existingPlan) {
          existingPlan.Qty += plan.Qty;
        } else {
          acc.push({ ...plan });
        }
        return acc;
      }, []);

      const csv = jsonToCSV(aggregatedPlans);
      setCsvContent(csv);
    };
    generateCSVContent();
  }, [kison, kisonhaut, kisoncolonne]);

  const add = () => {
    setKison([...kison, { longueur, profondeur, hauteur }]);
  };

  const addhaut = () => {
    setKisonhaut([...kisonhaut, { longueurhaut, profondeurhaut, hauteurhaut }]);
  };

  const addcolonne = () => {
    setKisoncolonne([...kisoncolonne, { longueurcolonne, profondeurcolonne, hauteurcolonne }]);
  };

  const clear = () => {
    setKison([]);
    setKisonhaut([]);
    setKisoncolonne([]);
  };
  const clearhaut = () => {
    setKisonhaut([]);
  };
  const clearbas = () => {
    setKison([]);
  };
  const clearcolone = () => {
    setKisoncolonne([]);
  };

  const importPlans = () => {
    setActiveComponent(null);
    setActiveComponentD("ImportPlans");
  };

  const back = () => {
    setActiveComponentD(null);
    setActiveComponent(null);
  };

  const save = async () => {
    try {
      const path = `${FileSystem.documentDirectory}plans.csv`;
      await FileSystem.writeAsStringAsync(path, csvContent);
      await Sharing.shareAsync(path);
    } catch (error) {
      console.error('Failed to save and share CSV file:', error);
    }
  };

  return (
    <WorkContext.Provider
      value={{
        hauteur,
        setHauteur,
        profondeur,
        setProfondeur,
        longueur,
        setLongueur,
        hauteurhaut,
        setHauteurhaut,
        profondeurhaut,
        setProfondeurhaut,
        longueurhaut,
        setLongueurhaut,
        hauteurcolonne,
        setHauteurcolonne,
        profondeurcolonne,
        setProfondeurcolonne,
        longueurcolonne,
        setLongueurcolonne,
        kison,
        setKison,
        kisonhaut,
        setKisonhaut,
        kisoncolonne,
        setKisoncolonne,
        csvContent,
        setCsvContent,
        add,
        addhaut,
        addcolonne,
        clear,
        clearbas,
        clearcolone,
        clearhaut,
        importPlans,
        back,
        save,
        activeComponent,
        setActiveComponent,
        activeComponentD,
        setActiveComponentD,
      }}
    >
      {children}
    </WorkContext.Provider>
  );
};

export const useWorkContext = () => {
  const context = useContext(WorkContext);
  if (!context) {
    throw new Error('useWorkContext must be used within a WorkProvider');
  }
  return context;
};
