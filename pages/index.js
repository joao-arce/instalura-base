import Menu from '../src/components/commons/Menu'
import Footer from '../src/components/commons/Footer'
import Text from '../src/components/foundation/Text'
import { Button } from '../src/components/commons/Button'
import { Grid } from '../src/components/foundation/layout/Grid'

export default function Home() {
  return (
    <div
      style={{
        flex: '1',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Menu />

      <Grid.Container>
        <Grid.Row>
          <Grid.Col offset={{ xs: 0, md: 1 }} value={{ xs: 12, md: 5 }}>
            <div>
              <Text
                variant="title"
                tag="h1"
                color="tertiary.main"
                textAlign={{ xs: 'center', md: 'left' }}
              >
                Compartilhe momentos e conecte-se com amigos
              </Text>
              <Text
                variant="pargraph1"
                tag="p"
                color="tertiary.light"
                textAlign={{ xs: 'center', md: 'left' }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quas minima accusantium repellat tempora! Recusandae, enim.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quas minima accusantium repellat tempora! Recusandae, enim.
              </Text>
              <Button
                margin={{ xs: 'auto', md: 'initial' }}
                display="block"
                variant="primary.main"
              >
                Cadastrar
              </Button>
            </div>
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <img
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
            {/* <img src="https://placehold.it/400x400" /> */}
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <Footer />
    </div>
  )
}
