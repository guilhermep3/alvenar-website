type props = {
   active: number;
}
export const TabBody = ({ active }: props) => {

   return (
      <div className="flex flex-col gap-3 py-6 text-black/90">
         {active === 0 && (
            <>
               <p>Fundada em 2003, a Alvenar Architecture nasceu com a paixão de conceber espaços que transcendem o 
                  tempo, unindo inovação e funcionalidade em cada projeto. Desde então, cultivamos a arte de criar 
                  ambientes inspiradores, especializando-nos em soluções arquitetônicas personalizadas para os setores 
                  residencial, comercial e urbano.</p>
               <p>Nossa equipe, composta por arquitetos e designers visionários, transforma ideias em realidade, 
                  harmonizando criatividade, sustentabilidade e tecnologia de ponta. Do conceito inicial à execução e 
                  gestão do projeto, nosso compromisso é entregar estruturas que não apenas atendam, mas superem as 
                  expectativas de nossos clientes, integrando-se de forma elegante e respeitosa ao seu entorno.</p>
            </>
         )
         }
         {active === 1 && (
            <>
               <p>Na Alvenar Architecture, nossa missão é moldar o futuro através de projetos arquitetônicos inovadores, 
                  sustentáveis e intrinsecamente funcionais, convertendo visões em espaços tangíveis e inspiradores. 
                  Colaboramos estreitamente com nossos clientes, dedicando-nos a compreender suas necessidades singulares 
                  para criar ambientes duradouros que enriqueçam suas vidas.</p>
               <p>Impulsionados por um design criativo, pela aplicação de tecnologias de ponta e por uma profunda 
                  responsabilidade ambiental, almejamos aprimorar o ambiente construído, fortalecer o tecido social das 
                  comunidades e legar um patrimônio arquitetônico de valor perene.</p>
            </>
         )
         }
         {active === 2 && (
            <>
               <p>A Alvenar Architecture tem como visão redefinir os paradigmas do design arquitetônico, concebendo 
                  espaços inovadores, sustentáveis e inspiradores onde forma e função se encontram em perfeita 
                  sintonia. Ambicionamos ser uma referência na criação de ambientes contemporâneos, erguendo estruturas 
                  atemporais que valorizam as comunidades, respeitam o equilíbrio ecológico e elevam a experiência 
                  humana.</p>
               <p>Através da nossa criatividade singular, da integração inteligente de tecnologias avançadas e de 
                  um compromisso inabalável com a excelência, buscamos inspirar conexões significativas entre as 
                  pessoas e os espaços que elas habitam.</p>
            </>
         )
         }
      </div>
   )
}