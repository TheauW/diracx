# Register a VO

## Prerequisites
- You have access to your DiracX instance URL.
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
- It is better to have admin rights on the VO’s IdP instance (e.g. [Indigo IAM](https://indigo-iam.github.io/)).

## Manage Users
### 1. Generate an OIDC client

1. Log in to your VO’s IdP instance.
=======
- It is better to have admin rights on the VO’s IAM instance (e.g. Indigo IAM).
=======
- It is better to have admin rights on the VO’s IAM instance (e.g. [Indigo IAM](https://indigo-iam.github.io/v/current/)).
>>>>>>> 8921500 (feat: add register vo doc)
=======
- It is better to have admin rights on the VO’s IdP instance (e.g. [Indigo IAM](https://indigo-iam.github.io/)).
>>>>>>> a4ea2af (feat: add the home page)

## Manage Users
### 1. Generate an OIDC client

<<<<<<< HEAD
1. Log in to your VO’s IAM instance.
>>>>>>> 59ced7d (feat: add a small section about how to register a VO)
=======
1. Log in to your VO’s IdP instance.
>>>>>>> a4ea2af (feat: add the home page)
2. Create a new OIDC client with:
   - **Client secret**: _none_
   - **Redirect URIs**:
     ```
     https://<your‑diracx‑url>/api/auth/authorize/complete
     ```
   - **Grant type**: `authorization_code`
<<<<<<< HEAD
<<<<<<< HEAD
   - **Scope**: at minimum `openid`, `profile` and `email`

### 2. Configure DiracX
<<<<<<< HEAD
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
=======
   - **Scope**: at minimum `openid`, `profile` and `email`
>>>>>>> 8921500 (feat: add register vo doc)

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
=======
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
>>>>>>> a4ea2af (feat: add the home page)
    ```

2. To add specific users, list their subject‑IDs under `UserSubjects`:

    ```yaml
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a4ea2af (feat: add the home page)
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
<<<<<<< HEAD
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
=======
>>>>>>> a4ea2af (feat: add the home page)
    ```

    > :bulb: User IDs are associated to the usernames that are defined in the `Registry > Users` section. This allows DiracX to retrieve the groups they belong to and their properties.

After saving, you should sync the configuration with DiracX. Dirac Groups and properties should then be associated to users defined in the `DiracX` section.
See [Convert CS](./convert_cs.md) for next steps.
<<<<<<< HEAD
>>>>>>> 59ced7d (feat: add a small section about how to register a VO)
=======

## Interact with Computing Elements

Client configuration is still managed through the DIRAC configuration so far. See [Submitting pilots to CEs using tokens](https://dirac.readthedocs.io/en/latest/AdministratorGuide/HowTo/pilotsWithTokens.html) for further details.

## Interact with Storage Elements

TODO
>>>>>>> a4ea2af (feat: add the home page)
