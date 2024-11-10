import { useEffect, useState } from 'react';
import './App.css';
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from './components/ui/card';
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from './components/ui/table';
import { Input } from './components/ui/input';

type State = {
  name: string;
  abbreviation: string;
}

function App() {
  const [searchExpression, setSearchExpression] = useState<string>('');
  const [showStates, setShowStates] = useState<State[]>([]);

  const states: State[] = [
    { name: 'Acre', abbreviation: 'AC' },
    { name: 'Alagoas', abbreviation: 'AL' },
    { name: 'Amapá', abbreviation: 'AP' },
    { name: 'Amazonas', abbreviation: 'AM' },
    { name: 'Bahia', abbreviation: 'BA' },
    { name: 'Ceará', abbreviation: 'CE' },
    { name: 'Distrito Federal', abbreviation: 'DF' },
    { name: 'Espírito Santo', abbreviation: 'ES' },
    { name: 'Goiás', abbreviation: 'GO' },
    { name: 'Maranhão', abbreviation: 'MA' },
    { name: 'Mato Grosso', abbreviation: 'MT' },
    { name: 'Mato Grosso do Sul', abbreviation: 'MS' },
    { name: 'Minas Gerais', abbreviation: 'MG' },
    { name: 'Pará', abbreviation: 'PA' },
    { name: 'Paraíba', abbreviation: 'PB' },
    { name: 'Paraná', abbreviation: 'PR' },
    { name: 'Pernambuco', abbreviation: 'PE' },
    { name: 'Piauí', abbreviation: 'PI' },
    { name: 'Rio de Janeiro', abbreviation: 'RJ' },
    { name: 'Rio Grande do Norte', abbreviation: 'RN' },
    { name: 'Rio Grande do Sul', abbreviation: 'RS' },
    { name: 'Rondônia', abbreviation: 'RO' },
    { name: 'Roraima', abbreviation: 'RR' },
    { name: 'Santa Catarina', abbreviation: 'SC' },
    { name: 'São Paulo', abbreviation: 'SP' },
    { name: 'Sergipe', abbreviation: 'SE' },
    { name: 'Tocantins', abbreviation: 'TO' }
  ];

  useEffect(() => {
    const getStates = async () => {
      const fetchStates = await Promise.resolve(states);
      setShowStates(fetchStates);
    }

    getStates();
  }, []);

  const filteredStates = showStates.filter(state =>
    state.name.toLowerCase().includes(searchExpression.toLowerCase()) ||
    state.abbreviation.toLowerCase().includes(searchExpression.toLowerCase())
  )

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>SELECIONE O ESTADO</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          value={searchExpression}
          onChange={(event) => setSearchExpression(event.target.value)}
          placeholder='Nome do Estado'
        />
        <Table>
          <TableCaption>Lista de estados do Brasil</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Abreviaçao</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStates.map((state) => (
              <TableRow key={state.name}>
                <TableCell align='left'>{state.name}</TableCell>
                <TableCell align='left'>{state.abbreviation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
  )
}

export default App
