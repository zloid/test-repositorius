const CalcUi = () => `
    <p>
        CalcUi_9832
    </p>
    <hr />
            <Container>
                <Row>
                    <Col>
                        {/* <br /> */}
                            <CalcScreen clickOnCalcScreen={this.getAnswerSlim} resultOnScreen={this.state.screenResult} />
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>

                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">7</Button>

                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">8</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">9</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">÷</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">4</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">5</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">6</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">*</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">1</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">2</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">3</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">-</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">0</Button>
                    </Col>
                    <Col>

                    </Col>
                    <Col>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={this.clearScreen} block variant="outline-secondary">C</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.getAnswerSlim} block variant="outline-secondary">=</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">.</Button>
                    </Col>
                    <Col>
                        <Button onClick={this.newCalcButtonAction} block variant="outline-secondary">+</Button>
                    </Col>
                </Row>
            </Container>
`

export default CalcUi
