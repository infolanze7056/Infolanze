import React from 'react'
import ServiceHero from './ServiceComponent/ServiceHero';
import ServiceTags from './ServiceComponent/ServiceTags';
import ServiceContent from './ServiceComponent/ServiceContent';
import img from "../../Images/ai-content-creation-generated-art-music-creative-writing-flowchart-isometric-vector-illustration_1284-82518.jpg"
import ServiceBredcumb from './ServiceComponent/ServiceBredcumb';

function Blockchain() {
  return (
    <div>
      <ServiceBredcumb
        serviceName="Blockchain Development"
        serviceNameB="/ Service / Blockchain Development"
      />
      <ServiceHero
        title="Blockchain Development Company In Ahmedabad"
        description="Infolanze is a generation-next tech-savvy company, crafting your digital transformation journey and modernize the way you do business."
      />
      <ServiceTags
        tags={[
          { name: "Blockchain", image: "https://png.pngtree.com/png-vector/20230112/ourmid/pngtree-blockchain-vector-transparent-image-png-image_6560354.png" },
          { name: "Smart Contract", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6JMUbMQdAZWtgjXGgKpyIRJtVsZkeXIVkgEW1a8RSvQVE4T5e34f6jJiH78HcyiOnRLk&usqp=CAU" },
          { name: "Distributed Database", image: "https://icons.veryicon.com/png/o/system/inspur-cloud-icon/distributed-database.png" }
        ]}
      />
      <ServiceContent
        imageUrl={img}
        title="Blockchain Development"
        description="Whether you're seeking enhanced security, transparent transactions, or decentralized applications, we bring a wealth of expertise to tailor solutions that align seamlessly with your business objectives."
        listItems={[
          {
            title: "Smart Contracts",
            description:
              "Smart contracts are self-executing contracts with terms directly written into code. They automatically execute and enforce agreements without intermediaries.",
          },
          {
            title: "Decentralized Apps - DApps",
            description:
              "Decentralized applications (DApps) run on blockchain networks, ensuring transparency, security, and autonomy. They eliminate intermediaries, fostering peer-to-peer interactions and innovation.",
          },
          {
            title: "Decentralized File Transfer Protocol",
            description:
              "Decentralized File Transfer Protocol (DFTP) enables peer-to-peer file sharing without centralized servers, enhancing privacy, security, and efficiency in data transmission.",
          },
          {
            title: "Web3 Game Development",
            description:
              "Web3 game development leverages blockchain technology for decentralized gameplay, ownership, and monetization, creating immersive experiences with enhanced security and transparency.",
          },
        ]}
      />
    </div>
  )
}

export default Blockchain;