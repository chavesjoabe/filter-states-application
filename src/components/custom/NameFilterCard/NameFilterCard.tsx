import { useState } from 'react';
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
import { Input } from '@/components/ui/input';
import { State } from '@/App';

type Props = {
  states: State[],
}

export const NameFilterCard: React.FC<Props> = ({ states }) => {
  const [searchExpression, setSearchExpression] = useState<string>('');

  const filteredStates = states.filter(state =>
    state.name.toLowerCase().includes(searchExpression.toLowerCase()) ||
    state.abbreviation.toLowerCase().includes(searchExpression.toLowerCase())
  )

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>BUSCA POR NOME</CardTitle>
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
