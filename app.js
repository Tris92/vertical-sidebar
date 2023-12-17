<Route render={(props)=>(
  <SidebarLayoutComponent {...props}>
    <Switch>
      <Route exact path="/pumps-dumps" component={PumpDumpSidePage} />
      <Route exact path="/nft-sidebar" component={NftSidebarPage} />
      <Route exact path="/stable-sidebar" component={StableSidebarPage} />
      <Route exact path="/alt-sidebar" component={AltSidebarPage} />
    </Switch>
  </SidebarLayoutComponent>
  )} />