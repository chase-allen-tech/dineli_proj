
import React, { Component } from 'react';
import { Row, Col, Tab, Nav } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './faq.css';

const FAQs = [
  {label: "What is a blockchain?", key: "first", content: "asdf1"},
  {label: "What is a token? What is ‘tokenization’?", key: "2nd", content: "asdf2"},
  {label: "What are the benefits of tokenized real estate?", key: "3rd", content: "asdf3"},
  {label: "How are properties chosen for inventory?", key: "4th", content: "asdf4"},
  {label: "Who holds the deed to the house?", key: "5th", content: "asdf5"},
  {label: "How do we ensure each LLC owns the deed on its property?", key: "6th", content: "asdf6"},
  {label: "Who manages the properties?", key: "7th", content: "asdf7"},
  {label: "What happens if the tenant does not pay rent?", key: "8th", content: "asdf8"},
  {label: "How much do I need to invest?", key: "9th", content: "asdf9"},
  {label: "What can I do with my Tokens?", key: "10th", content: "asdf10"},
]

class FAQ extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <Fade>
          <div className="img-box img-box-faq"></div>
        </Fade>
        <div className="d-highlight d-font-black d-content-center d-text-72">
          &nbsp;
        </div>
        <div style={{margin: "3% 12% 3% 12%"}}>
          {/*<div className="col-md-8">*/}
          {/*  <InputGroup className="mb-3">*/}
          {/*    <InputGroup.Prepend className="d-font-bold d-text-18">*/}
          {/*      <InputGroup.Text style={{height: '100%'}}><i className="fa fa-search"/></InputGroup.Text>*/}
          {/*    </InputGroup.Prepend>*/}
          {/*    <FormControl*/}
          {/*      className="d-font-bold d-text-18"*/}
          {/*      placeholder="Questions and answers"*/}
          {/*    />*/}
          {/*    <InputGroup.Append>*/}
          {/*      <Button className="d-font-bold d-text-18 d-btn-radius-2" style={{paddingLeft: 24, paddingRight: 24}}>SEND</Button>*/}
          {/*    </InputGroup.Append>*/}
          {/*  </InputGroup>*/}
          {/*  <FormControl className="d-font-bold d-text-18" as="textarea" style={{height: '16rem'}} />*/}
          {/*</div>*/}
          <div style={{paddingTop: '6rem'}} />
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={4} style={{marginBottom: 30}}>
                <Nav variant="pills" className="flex-column d-content-dark">
                  <div className="d-content-highlight d-font-black d-text-24" style={{padding: '6%'}}>
                    English
                  </div>
                  {
                    FAQs.map((item, i) => {
                      return <Nav.Link className="nav-faq" eventKey={item.key} key={i}>
                          <div className="d-white d-text-24" style={{padding: '2% 6%'}}>
                            {item.label}
                          </div>
                        </Nav.Link>
                    })
                  }
                  <div style={{paddingTop: '12rem'}} />
                </Nav>
              </Col>
              <Col sm={8} style={{paddingLeft: '4%'}}>
                <Tab.Content>
                  {
                    FAQs.map((item, i) => {
                      return <Tab.Pane eventKey={item.key} key={i}>
                        <div className="d-white d-font-black d-text-72">
                          {item.label}
                        </div>
                        <div style={{paddingTop: '1rem'}} />
                        <div className="d-white d-font-book d-text-18">
                          {/*item.content*/}
                          Cryptocurrencies like Bitcoin and Ethereum are powered by a technology called the blockchain. At its most basic, a
                          blockchain is a list of transactions that anyone can view and verify. The Bitcoin blockchain, for example, contains a
                          record of every time someone sent or received bitcoin. Cryptocurrencies and the blockchain technology that powers
                          them make it possible to transfer value online without the need for a middleman like a bank or credit card company.

                            Almost all cryptocurrencies, including Bitcoin, are secured via blockchain networks. This means their accuracy is
                          constantly being verified by a huge amount of computing power.
                            The list of transactions contained in the blockchain is fundamental for most cryptocurrencies because it enables
                          secure payments to be made between people who don’t know each other without having to go through a third-party
                          verifier like a bank.
                            Due to the cryptographic nature of these networks, payments via blockchain can be more secure than standard
                          debit/credit card transactions. When making a Bitcoin payment, for instance, you don’t need to provide any sensitive
                          information. That means there is almost zero risks of your financial information being compromised, or your identity
                          being stolen.
                            Blockchain technology is also exciting because it has many uses beyond cryptocurrency. Blockchains are being
                          used to explore medical research, improve the accuracy of healthcare records, streamline supply chains, and so
                          much more.

                          What are some advantages of blockchains?

                          They’re global: which means that cryptocurrencies can be sent across the planet quickly and cheaply.

                          They increase privacy: Cryptocurrency payments don’t require you to include your personal information, which
                          protects you from being hacked or having your identity stolen.

                          They’re open: Because every single transaction on cryptocurrency networks is published publicly in the form of the
                          blockchain, anyone can scrutinize them.
                          That leaves no room for manipulation of transactions, changing the money supply, or adjusting the rules mid-game. The
                          software that constitutes the core of these currencies is free and open-source so anyone can review the code.

                          How does blockchain work?

                          Picture a chain you might use for a ship’s anchor. But in this case, every link on the chain is a
                          chunk of information that contains transaction data. At the top of the chain, you see what happened today, and as you
                        </div>
                      </Tab.Pane>
                    })
                    /*
                    Cryptocurrencies like Bitcoin and Ethereum are powered by a technology called the blockchain. At its most basic, a
                      blockchain is a list of transactions that anyone can view and verify. The Bitcoin blockchain, for example, contains a
                      record of every time someone sent or received bitcoin. Cryptocurrencies and the blockchain technology that powers
                      them make it possible to transfer value online without the need for a middleman like a bank or credit card company.

                        Almost all cryptocurrencies, including Bitcoin, are secured via blockchain networks. This means their accuracy is
                      constantly being verified by a huge amount of computing power.
                        The list of transactions contained in the blockchain is fundamental for most cryptocurrencies because it enables
                      secure payments to be made between people who don’t know each other without having to go through a third-party
                      verifier like a bank.
                        Due to the cryptographic nature of these networks, payments via blockchain can be more secure than standard
                      debit/credit card transactions. When making a Bitcoin payment, for instance, you don’t need to provide any sensitive
                      information. That means there is almost zero risks of your financial information being compromised, or your identity
                      being stolen.
                        Blockchain technology is also exciting because it has many uses beyond cryptocurrency. Blockchains are being
                      used to explore medical research, improve the accuracy of healthcare records, streamline supply chains, and so
                      much more.

                      What are some advantages of blockchains?

                      They’re global: which means that cryptocurrencies can be sent across the planet quickly and cheaply.

                      They increase privacy: Cryptocurrency payments don’t require you to include your personal information, which
                      protects you from being hacked or having your identity stolen.

                      They’re open: Because every single transaction on cryptocurrency networks is published publicly in the form of the
                      blockchain, anyone can scrutinize them.
                      That leaves no room for manipulation of transactions, changing the money supply, or adjusting the rules mid-game. The
                      software that constitutes the core of these currencies is free and open-source so anyone can review the code.

                      How does blockchain work?

                      Picture a chain you might use for a ship’s anchor. But in this case, every link on the chain is a
                      chunk of information that contains transaction data. At the top of the chain, you see what happened today, and as you
                    */
                  }
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    )
  }
}

export default FAQ;