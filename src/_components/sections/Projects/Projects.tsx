import './Projects.css';
import ProjectCard from './projectcard/ProjectCard';

export default function Projects() {
    return (
        <div className='titlediv'>
            <h1 className='title'>Projects</h1>
            <section className="projects" id='projects'>
                <ProjectCard
                    name='outfits.bio'
                    desc='A place to get inspiration, share and organize your clothes virtually.'
                    icon='/images/outfitsbio.png'
                    href='https://outfits.bio'
                    backgroundColor='#EC6D2D'
                />

                <ProjectCard
                    name='Mythic'
                    desc='The best way to play Windows games on the Mac.'
                    icon='/images/mythic.png'
                    href='https://getmythic.app'
                    backgroundColor='#8443C6'
                />

                <ProjectCard
                    name='Coplanner'
                    desc='Revolutionizing the way vessels operate.'
                    icon='/images/coplanner.png'
                    href='https://coplanner.vercel.app'
                    backgroundColor='#121212'
                />

                <ProjectCard
                    name='Bpnt'
                    desc='We turn your idea into production.'
                    icon='/images/bpnt.png'
                    backgroundColor='#384E85'
                />
            </section><br />

            <details>
                <summary className='title'>School Opdrachten</summary><br />
                <section className="projects">
                    <ProjectCard name='Rekenapp in PHP' backgroundColor='#A7C7E7' href='https://rekenapp.jeremybosma.nl' />
                    <ProjectCard name='Irritante Webpage' backgroundColor='#FAA0A0' href='https://irritante-webpage.jeremybosma.nl/' />
                    <ProjectCard name='Portfolio mockups in Figma' backgroundColor='#222222' href='https://www.figma.com/proto/deejQtKzKBApU6uIYjmVX4/02_did%2Fwsh-portfolio-1.0?page-id=0%3A1&type=design&node-id=1-3&viewport=557%2C445%2C0.22&t=8chiAav0CLI1frG3-1&scaling=min-zoom&starting-point-node-id=1%3A3&mode=design' />
                </section>
            </details>
        </div>
    );
};