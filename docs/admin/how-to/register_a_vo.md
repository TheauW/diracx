# Register a VO

## Prerequisites
- You have access to your DiracX instance URL.
<<<<<<< HEAD
- It is better to have admin rights on the VO’s IdP instance (e.g. [Indigo IAM](https://indigo-iam.github.io/)).

## Manage Users
### 1. Generate an OIDC client

1. Log in to your VO’s IdP instance.
=======
- It is better to have admin rights on the VO’s IAM instance (e.g. Indigo IAM).

## 1. Generate an OIDC client

1. Log in to your VO’s IAM instance.
>>>>>>> 59ced7d (feat: add a small section about how to register a VO)
2. Create a new OIDC client with:
   - **Client secret**: _none_
   - **Redirect URIs**:
     ```
     https://<your‑diracx‑url>/api/auth/authorize/complete
     ```
   - **Grant type**: `authorization_code`
<<<<<<< HEAD
   - **Scope**: at minimum `openid`, `profile` and `email`

### 2. Configure DiracX
1. In your DIRAC CS, add under `DiracX > CsSync > VOs > <VO> > IdP`:

    ```yaml
    DiracX
    {
      CsSync
      {
        VOs
        {
          <VO>
          {
            IdP
            {
              ClientID = "<OIDC‑client‑ID>"
              URL = "https://<your‑idp‑instance>/"
            }
          }
        }
      }
    }
=======
   - **Scope**: at minimum `openid`

## 2. Configure DiracX
1. In your DIRAC CS, add under `DiracX > CsSync > VOs > <VO> > IdP`:

    ```yaml
    DiracX:
      CsSync:
        VOs:
          <VO>:
            IdP:
              client_id: "<OIDC‑client‑ID>"
              url: "https://<your‑iam‑instance>/"
>>>>>>> 59ced7d (feat: add a small section about how to register a VO)
    ```

2. To add specific users, list their subject‑IDs under `UserSubjects`:

    ```yaml
<<<<<<< HEAD
    DiracX
    {
      CsSync
      {
        VOs
        {
          <VO>
          {
            UserSubjects
            {
              <username from dirac> = <user id from the IdP instance>
              ...
            }
          }
        }
      }
    }
    ```

    !!! note

        User IDs are associated to the usernames that are defined in the `Registry > Users` section. This allows DiracX to retrieve the groups they belong to and their properties.

After saving, you should sync the configuration with DiracX. Dirac Groups and properties should then be associated to users defined in the `DiracX` section.
See [Convert CS](./convert_cs.md) for next steps.

## Interact with Computing Elements

Client configuration is still managed through the DIRAC configuration so far. See [Submitting pilots to CEs using tokens](https://dirac.readthedocs.io/en/latest/AdministratorGuide/HowTo/pilotsWithTokens.html) for further details.

## Interact with Storage Elements

TODO
=======
    DiracX:
      CsSync:
        VOs:
          <VO>:
            UserSubjects:
              - "user‑sub‑id‑1"
              - "user‑sub‑id‑2"
    ```

After saving, you should sync the configuration with DiracX.
See [Convert CS](./convert_cs.md) for next steps.
>>>>>>> 59ced7d (feat: add a small section about how to register a VO)
