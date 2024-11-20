import './App.css';
import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { NameFilterCard } from './components/custom/NameFilterCard/NameFilterCard';
import { RegionFilterCard } from './components/custom/RegionFilterCard/RegionFilterCard';

export type State = {
  name: string;
  abbreviation: string;
  region: string;
}

function App() {
  const [searchExpression, setSearchExpression] = useState<string>('');
  const [showStates, setShowStates] = useState<State[]>([]);
  const [showRegions, setShowRegions] = useState<string[]>([]);

  const states: State[] = [
    { name: 'Acre', abbreviation: 'AC', region: 'Norte' },
    { name: 'Alagoas', abbreviation: 'AL', region: 'Nordeste' },
    { name: 'Amapá', abbreviation: 'AP', region: 'Norte' },
    { name: 'Amazonas', abbreviation: 'AM', region: 'Norte' },
    { name: 'Bahia', abbreviation: 'BA', region: 'Nordeste' },
    { name: 'Ceará', abbreviation: 'CE', region: 'Nordeste' },
    { name: 'Distrito Federal', abbreviation: 'DF', region: 'Centro-Oeste' },
    { name: 'Espírito Santo', abbreviation: 'ES', region: 'Sudeste' },
    { name: 'Goiás', abbreviation: 'GO', region: 'Centro-Oeste' },
    { name: 'Maranhão', abbreviation: 'MA', region: 'Nordeste' },
    { name: 'Mato Grosso', abbreviation: 'MT', region: 'Centro-Oeste' },
    { name: 'Mato Grosso do Sul', abbreviation: 'MS', region: 'Centro-Oeste' },
    { name: 'Minas Gerais', abbreviation: 'MG', region: 'Sudeste' },
    { name: 'Pará', abbreviation: 'PA', region: 'Norte' },
    { name: 'Paraíba', abbreviation: 'PB', region: 'Nordeste' },
    { name: 'Paraná', abbreviation: 'PR', region: 'Sul' },
    { name: 'Pernambuco', abbreviation: 'PE', region: 'Nordeste' },
    { name: 'Piauí', abbreviation: 'PI', region: 'Nordeste' },
    { name: 'Rio de Janeiro', abbreviation: 'RJ', region: 'Sudeste' },
    { name: 'Rio Grande do Norte', abbreviation: 'RN', region: 'Nordeste' },
    { name: 'Rio Grande do Sul', abbreviation: 'RS', region: 'Sul' },
    { name: 'Rondônia', abbreviation: 'RO', region: 'Norte' },
    { name: 'Roraima', abbreviation: 'RR', region: 'Norte' },
    { name: 'Santa Catarina', abbreviation: 'SC', region: 'Sul' },
    { name: 'São Paulo', abbreviation: 'SP', region: 'Sudeste' },
    { name: 'Sergipe', abbreviation: 'SE', region: 'Nordeste' },
    { name: 'Tocantins', abbreviation: 'TO', region: 'Norte' }
  ];

  useEffect(() => {
    const getStates = async () => {
      const fetchStates = await Promise.resolve(states);
      setShowStates(fetchStates);
      const regions = Array.from(new Set(fetchStates.map(state => state.region)));
      setShowRegions(regions);
    }

    getStates();
  }, []);


  return (
    <Tabs defaultValue="name" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="name">Busca por nome</TabsTrigger>
        <TabsTrigger value="region">Busca por região</TabsTrigger>
      </TabsList>
      <TabsContent value="name">
        <NameFilterCard states={showStates} />
      </TabsContent>
      <TabsContent value="region">
        <RegionFilterCard states={showStates} regions={showRegions} />
      </TabsContent>
    </Tabs>
  )
}

export default App
