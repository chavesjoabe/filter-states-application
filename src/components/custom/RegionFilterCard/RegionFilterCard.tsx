import { useState } from 'react';
import '../../../App.css';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { State } from '@/App';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

type Props = {
  states: State[],
  regions: string[],
}

export const RegionFilterCard: React.FC<Props> = ({ states, regions }) => {
  const [searchExpression, setSearchExpression] = useState<string>('');

  const filteredStates = states.filter(state => state.region.includes(searchExpression));

  const handleSelectChange = (region: string) => {
    setSearchExpression(region);
  }

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>BUSCA POR REGIÃO</CardTitle>
      </CardHeader>
      <CardContent>
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger className="w-[450px]">
            <SelectValue placeholder="Selecione a região" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Regiões</SelectLabel>
              {regions.map(region => (
                <SelectItem key={region} value={region}>{region}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>        
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
